# SocialGenie AI

A modern, AI-powered social media management app built with React Native and Expo. Transform your social media strategy with intelligent content creation, scheduling, and analytics.

![SocialGenie AI](https://img.shields.io/badge/React%20Native-Expo-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
![AI Powered](https://img.shields.io/badge/AI-Powered-8b5cf6)

## ✨ Features

### 🎯 Core Features
- **AI-Powered Content Generation** - Create engaging posts with artificial intelligence
- **Smart Scheduling** - Optimize posting times with AI recommendations
- **Multi-Platform Management** - Manage Instagram, Twitter, LinkedIn, Facebook, TikTok, and YouTube
- **Advanced Analytics** - Track performance with detailed insights and metrics
- **Content Library** - Organize and manage all your content in one place
- **AI Templates** - Pre-built templates for different content types

### 🌟 AI Capabilities
- **Content Suggestions** - AI generates post ideas based on trending topics
- **Optimal Timing** - Machine learning suggests best posting times
- **Hashtag Recommendations** - AI-powered hashtag suggestions for maximum reach
- **Performance Predictions** - Predict post performance before publishing
- **Trend Analysis** - Stay ahead with AI-driven trend insights

### 📱 User Experience
- **Dark/Light Mode** - Beautiful adaptive themes
- **Responsive Design** - Optimized for all screen sizes
- **Intuitive Navigation** - Clean, modern interface
- **Real-time Updates** - Live performance tracking
- **Offline Support** - Work on content without internet

## 🖼️ Screenshots

### Welcome Screen
Beautiful onboarding experience with gradient backgrounds and smooth animations.

### Dashboard
Comprehensive overview of your social media performance with:
- Quick stats and metrics
- AI-powered suggestions
- Recent posts overview
- Quick action buttons

### Create Post
Intelligent post creation with:
- AI content generation
- Platform selection
- Media upload
- Smart scheduling options

### Analytics
Advanced analytics dashboard featuring:
- Performance trends
- Platform-specific metrics
- Top performing posts
- AI insights and recommendations

### Content Library
Organized content management with:
- Filter and search capabilities
- Content templates
- Draft management
- Multi-platform organization

### Profile
Complete user profile management with:
- Account settings
- Connected social accounts
- Preferences and notifications
- Support and help center

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- iOS Simulator (for iOS development) or Android Studio (for Android development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/socialgenie-ai.git
   cd socialgenie-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install Expo CLI** (if not already installed)
   ```bash
   npm install -g @expo/cli
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   expo start
   ```

5. **Run on your device**
   - **iOS**: Press `i` in the terminal or scan QR code with Camera app
   - **Android**: Press `a` in the terminal or scan QR code with Expo Go app
   - **Web**: Press `w` in the terminal

### Alternative Installation (if npm install fails)

If you encounter issues with `npm install`, try these solutions:

1. **Clear npm cache**
   ```bash
   npm cache clean --force
   ```

2. **Delete node_modules and reinstall**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Use yarn instead of npm**
   ```bash
   npm install -g yarn
   yarn install
   ```

4. **Install specific dependencies**
   ```bash
   npx expo install expo-router expo-linear-gradient @expo/vector-icons
   npx expo install react-native-safe-area-context react-native-screens
   npx expo install react-native-gesture-handler react-native-reanimated
   ```

## 📁 Project Structure

```
socialgenie-ai/
├── app/                          # App screens and navigation
│   ├── (tabs)/                   # Tab navigation screens
│   │   ├── index.tsx            # Dashboard screen
│   │   ├── create.tsx           # Post creation screen
│   │   ├── analytics.tsx        # Analytics screen
│   │   ├── library.tsx          # Content library screen
│   │   ├── profile.tsx          # Profile screen
│   │   └── _layout.tsx          # Tab layout
│   ├── index.tsx                # Welcome/onboarding screen
│   └── _layout.tsx              # Root layout
├── assets/                       # Static assets (images, icons)
├── components/                   # Reusable UI components
├── constants/                    # App constants and configuration
├── hooks/                        # Custom React hooks
├── types/                        # TypeScript type definitions
├── utils/                        # Utility functions
├── app.json                      # Expo configuration
├── package.json                  # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
└── README.md                     # Project documentation
```

## 🛠️ Built With

### Core Technologies
- **[React Native](https://reactnative.dev/)** - Mobile app framework
- **[Expo](https://expo.dev/)** - React Native platform and tools
- **[TypeScript](https://www.typescriptlang.com/)** - Type-safe JavaScript
- **[Expo Router](https://docs.expo.dev/router/introduction/)** - File-based navigation

### UI & Styling
- **[React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)** - Advanced animations
- **[Expo Linear Gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)** - Beautiful gradients
- **[Expo Vector Icons](https://docs.expo.dev/guides/icons/)** - Icon library
- **[React Native Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context)** - Safe area handling

### State Management & Data
- **[Zustand](https://github.com/pmndrs/zustand)** - Lightweight state management
- **[TanStack Query](https://tanstack.com/query)** - Data fetching and caching
- **[Zod](https://zod.dev/)** - Runtime validation

## 🎨 Design System

### Color Palette
- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#8b5cf6` (Purple)
- **Accent**: `#ec4899` (Pink)
- **Success**: `#10b981` (Emerald)
- **Warning**: `#f59e0b` (Amber)
- **Error**: `#ef4444` (Red)

### Typography
- **Font Family**: System fonts (SF Pro on iOS, Roboto on Android)
- **Font Weights**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold), 800 (Extrabold)

### Components
- **Consistent spacing**: 4px grid system
- **Border radius**: 8px, 12px, 16px, 20px
- **Shadows**: Subtle elevation with platform-specific shadows
- **Dark mode**: Full support with adaptive colors

## 📱 Platform Support

- ✅ **iOS** (iPhone and iPad)
- ✅ **Android** (Phone and Tablet)
- ✅ **Web** (Responsive design)

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
# API Configuration
API_BASE_URL=https://api.socialgenie.ai
API_KEY=your_api_key_here

# Social Media APIs
INSTAGRAM_CLIENT_ID=your_instagram_client_id
TWITTER_API_KEY=your_twitter_api_key
LINKEDIN_CLIENT_ID=your_linkedin_client_id

# Analytics
ANALYTICS_TRACKING_ID=your_analytics_id
```

### Expo Configuration
The app is configured in `app.json` with:
- App name and version
- Icon and splash screen
- Platform-specific settings
- Build configurations

## 🚀 Deployment

### Building for Production

1. **Configure app signing**
   ```bash
   expo configure
   ```

2. **Build for iOS**
   ```bash
   expo build:ios
   ```

3. **Build for Android**
   ```bash
   expo build:android
   ```

4. **Web deployment**
   ```bash
   expo export:web
   ```

### Distribution
- **App Store**: Use Expo's managed workflow for easy submission
- **Google Play**: Automated builds and submission with EAS
- **Web**: Deploy to Vercel, Netlify, or any static hosting

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use meaningful commit messages
- Write tests for new features
- Update documentation as needed
- Follow the existing code style

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [Expo Team](https://expo.dev/) for the amazing platform
- [React Native Community](https://reactnative.dev/) for the framework
- [Ionicons](https://ionic.io/ionicons) for the beautiful icons
- Design inspiration from modern social media apps

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/socialgenie-ai?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/socialgenie-ai?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/socialgenie-ai)
![GitHub license](https://img.shields.io/github/license/yourusername/socialgenie-ai)

---

Made with ❤️ for the creator community. Transform your social media presence with AI-powered tools that work as hard as you do.