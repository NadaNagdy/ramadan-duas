<div align="center">
  <h1>🌙 أدعية رمضان - Ramadan Duas</h1>
  <p>A beautiful, modern web application for Ramadan prayers and duas</p>
  <p>Built with React, TypeScript, Vite, and Google Gemini AI</p>
</div>

---

## ✨ Features

### 🕌 Core Features
- **Daily Duas**: 30 days of Ramadan duas with beautiful Arabic calligraphy
- **Quranic Duas**: Authentic duas from the Holy Quran
- **Prophet Duas**: Duas from the Prophet Muhammad (PBUH)
- **Laylat al-Qadr Duas**: Special prayers for the Night of Power
- **Categorized Duas**: Organized by intention (forgiveness, guidance, health, etc.)
- **AI-Powered Dua Generator**: Generate personalized duas using Google Gemini AI
- **Text-to-Speech**: Listen to duas with beautiful Arabic pronunciation
- **Community Sharing**: Share and discover duas from the community

### 🎨 Design Features
- **RTL Support**: Full right-to-left Arabic language support
- **Islamic Aesthetics**: Beautiful Islamic decorations and golden theme
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Dark Theme**: Easy on the eyes for late-night prayers
- **Smooth Animations**: Elegant transitions and floating effects

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ramadan-duas
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```
   
   Or alternatively:
   ```env
   VITE_API_KEY=your_gemini_api_key_here
   ```
   
   Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

Preview the production build:
```bash
npm run preview
```

## 🛠️ Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite 6** - Build tool and dev server
- **React Router DOM 7** - Client-side routing
- **Google Gemini AI** - AI-powered dua generation
- **Lucide React** - Beautiful icons
- **Tailwind CSS** - Styling (via CDN)

## 📁 Project Structure

```
ramadan-duas/
├── components/          # Reusable React components
│   ├── DuaCard.tsx     # Dua display card
│   ├── Navbar.tsx      # Navigation bar
│   └── IslamicDecorations.tsx  # Decorative elements
├── pages/              # Page components
│   ├── Home.tsx        # Homepage
│   ├── DailyDuas.tsx   # Daily duas page
│   ├── QuranicDuas.tsx # Quranic duas
│   ├── ProphetDuas.tsx # Prophet duas
│   ├── QadrDuas.tsx    # Laylat al-Qadr duas
│   ├── Categories.tsx # Categorized duas
│   ├── AIDuaGenerator.tsx  # AI dua generator
│   └── DuaCommunity.tsx    # Community sharing
├── services/           # API services
│   ├── geminiService.ts    # Gemini AI integration
│   └── ttsService.ts       # Text-to-speech service
├── constants.tsx       # App constants and data
├── types.ts            # TypeScript type definitions
├── App.tsx             # Main app component
├── index.tsx           # Entry point
└── vite.config.ts      # Vite configuration
```

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variable: `VITE_GEMINI_API_KEY`
4. Deploy!

The `vercel.json` file is already configured for optimal deployment.

### Deploy to GitHub Pages

1. Update `vite.config.ts`:
   ```typescript
   base: '/your-repo-name/',
   ```
2. Build and deploy:
   ```bash
   npm run build
   npx gh-pages -d dist
   ```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_GEMINI_API_KEY` | Google Gemini API key for AI features | Yes |
| `VITE_API_KEY` | Alternative name for API key | Yes (if not using VITE_GEMINI_API_KEY) |

### Vite Configuration

The app is configured for:
- ✅ Production optimizations
- ✅ Code splitting (React vendor, AI vendor)
- ✅ TypeScript support
- ✅ React Fast Refresh

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- All duas are from authentic Islamic sources
- Built with love for the Muslim community
- Special thanks to Google Gemini AI for powering the dua generation

## 📧 Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

<div align="center">
  <p>رمضان مبارك - Ramadan Mubarak</p>
  <p>تقبل الله منا ومنكم صالح الأعمال</p>
  <p>May Allah accept our good deeds</p>
</div>
