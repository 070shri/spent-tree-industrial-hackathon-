# Spent Tree - Website 🌳

A beautiful, interactive web application for tracking expenses and planting virtual trees. Watch your spending grow as you save money!

**Live Demo:** [https://spent-tree.vercel.app](https://spent-tree.vercel.app)

## 🌟 Features

- **Interactive Dashboard** - Visualize your expense patterns with charts and analytics
- **Expense Tracking** - Log daily expenses with categories and detailed breakdowns
- **Virtual Forest** - Plant trees that grow as you achieve savings goals
- **Goal Setting** - Set and track financial goals with visual progress indicators
- **User Authentication** - Secure login and signup with Google OAuth support
- **Real-time Sync** - All data syncs across devices via Supabase
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Dark Mode** - Beautiful dark theme for comfortable viewing

## 🚀 Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **React Router** - Client-side routing
- **TanStack Query** - Data fetching and caching
- **Zustand** - State management

### Backend & Database
- **Supabase** - PostgreSQL database and auth
- **Vercel** - Deployment and hosting

## 📋 Prerequisites

Before you begin, ensure you have:
- Node.js (v16 or higher)
- npm or yarn package manager
- Git
- A Supabase account (free tier works great)

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/070shri/spent-tree-industrial-hackathon-.git
cd spentree-hackathon
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

Get these from your Supabase project settings: [Supabase Dashboard](https://app.supabase.com)

4. **Start the development server**
```bash
npm run dev
```

The app will be available at `http://localhost:8080`

## 📜 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint

# Fix linting issues
npm run lint:fix
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── dashboard/      # Dashboard specific components
│   └── ...
├── contexts/           # React Context providers
├── hooks/              # Custom hooks
├── lib/                # Utility libraries
│   ├── supabase.ts     # Supabase client
│   ├── auth.ts         # Auth functions
│   └── api.ts          # API calls
├── pages/              # Page components
├── App.tsx             # Main App component
└── main.tsx            # Entry point
```

## 🔐 Authentication

The app supports:
- Email/Password signup and login
- Google OAuth (Coming soon)
- Persistent sessions with Supabase

## 🌳 Key Features Explained

### Dashboard
- Overview of total expenses and savings
- Charts showing expense trends
- Quick action buttons for common tasks

### Expense Tracking
- Add expenses with category tags
- View expense history and patterns
- Edit or delete expenses

### Virtual Forest
- One tree planted for every goal achieved
- Visual representation of your progress
- Share your forest with friends

### Goals
- Set financial targets
- Track progress toward each goal
- Get notified when goals are achieved

## 🚀 Deployment

The website is automatically deployed to Vercel on every push to the `main` branch.

**Current Deployment:** [https://spent-tree.vercel.app](https://spent-tree.vercel.app)

### To deploy manually:
```bash
npm run build
vercel deploy --prod
```

## 🐛 Troubleshooting

### Environment variables not loading
- Make sure `.env` file is in the root directory
- Restart the dev server after adding variables
- Variables must start with `VITE_` to be accessible in the browser

### Supabase connection issues
- Verify your Supabase URL and Anon Key are correct
- Check that your Supabase project is active
- Ensure CORS is properly configured in Supabase

### Build errors
```bash
# Clear node_modules and reinstall
rm -r node_modules
npm install
npm run build
```

## 📱 Mobile App

The mobile app (React Native with Expo) is available at:
- Repository: [Spent-tree-App](https://github.com/Hitesh1477/Spent-tree-App)
- Syncs with the same backend

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 👥 Team

Built during the Industry Hackathon 2026

## 📞 Support

For issues, feature requests, or questions:
1. Check the [Issues](https://github.com/070shri/spent-tree-industrial-hackathon-/issues) page
2. Create a new issue with detailed information

## 🎉 Acknowledgments

- [Expo](https://expo.dev) for the mobile framework
- [Supabase](https://supabase.com) for backend services
- [Vercel](https://vercel.com) for hosting
- [shadcn/ui](https://ui.shadcn.com) for beautiful components
- All contributors and testers
