#!/bin/bash

echo "🚀 Setting up SocialGenie AI..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js from https://nodejs.org/"
    exit 1
fi

print_success "Node.js found: $(node --version)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm."
    exit 1
fi

print_success "npm found: $(npm --version)"

# Clean up previous installations
print_status "Cleaning up previous installations..."
rm -rf node_modules package-lock.json yarn.lock

# Clear npm cache
print_status "Clearing npm cache..."
npm cache clean --force

# Install Expo CLI globally if not installed
if ! command -v expo &> /dev/null; then
    print_status "Installing Expo CLI globally..."
    npm install -g @expo/cli
    print_success "Expo CLI installed"
else
    print_success "Expo CLI found: $(expo --version)"
fi

# Try installing with npm first
print_status "Installing dependencies with npm..."
if npm install; then
    print_success "Dependencies installed successfully with npm!"
else
    print_warning "npm install failed. Trying alternative approaches..."
    
    # Try installing with --legacy-peer-deps
    print_status "Trying npm install with --legacy-peer-deps..."
    if npm install --legacy-peer-deps; then
        print_success "Dependencies installed with --legacy-peer-deps!"
    else
        print_warning "npm install with --legacy-peer-deps failed. Trying yarn..."
        
        # Install yarn if not available
        if ! command -v yarn &> /dev/null; then
            print_status "Installing yarn..."
            npm install -g yarn
        fi
        
        # Try with yarn
        if yarn install; then
            print_success "Dependencies installed successfully with yarn!"
        else
            print_error "All installation methods failed. Please try manual installation:"
            echo ""
            echo "1. Install Expo dependencies:"
            echo "   npx expo install expo-router expo-linear-gradient @expo/vector-icons"
            echo ""
            echo "2. Install React Native dependencies:"
            echo "   npx expo install react-native-safe-area-context react-native-screens"
            echo "   npx expo install react-native-gesture-handler react-native-reanimated"
            echo ""
            echo "3. Install other dependencies:"
            echo "   npm install zustand @tanstack/react-query zod react-hook-form"
            exit 1
        fi
    fi
fi

# Install specific Expo dependencies if needed
print_status "Installing Expo-specific dependencies..."
npx expo install expo-router expo-linear-gradient @expo/vector-icons
npx expo install react-native-safe-area-context react-native-screens
npx expo install react-native-gesture-handler react-native-reanimated

print_success "Setup completed successfully! 🎉"
echo ""
print_status "To start the development server, run:"
echo "  npm start"
echo "  # or"
echo "  expo start"
echo ""
print_status "To run on specific platforms:"
echo "  npm run ios     # iOS Simulator"
echo "  npm run android # Android Emulator"
echo "  npm run web     # Web browser"
echo ""
print_success "Happy coding! 🚀"