
import { GoogleGenAI, Modality } from "@google/genai";

// Initialize the Google GenAI SDK with the API key from environment variables.
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.VITE_API_KEY });

// Persistent AudioContext for lower latency on subsequent plays.
let persistentAudioCtx: AudioContext | null = null;

function getAudioContext() {
  if (!persistentAudioCtx) {
    persistentAudioCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
  }
  // Handle auto-play policy by resuming if suspended.
  if (persistentAudioCtx.state === 'suspended') {
    persistentAudioCtx.resume();
  }
  return persistentAudioCtx;
}

function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

/**
 * Optimizes the speed of listening to dua by reusing the AudioContext
 * and ensuring a direct prompt for the TTS model.
 */
export async function speakDua(text: string) {
  if (!import.meta.env.VITE_GEMINI_API_KEY && !import.meta.env.VITE_API_KEY) {
    throw new Error("API key is not configured. Please set VITE_GEMINI_API_KEY or VITE_API_KEY environment variable.");
  }
  try {
    const audioCtx = getAudioContext();
    
    // Prompting directly without excessive wrappers for faster response.
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: `Recite: ${text}` }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' },
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!base64Audio) throw new Error("No audio returned");

    const audioBuffer = await decodeAudioData(
      decode(base64Audio),
      audioCtx,
      24000,
      1
    );

    const source = audioCtx.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioCtx.destination);
    source.start(0);

    return source;
  } catch (error) {
    console.error("TTS Error:", error);
    throw error;
  }
}
