import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  useColorScheme,
  Dimensions,
} from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const styles = createStyles(isDark);

  function handleGetStarted() {
    router.replace('/(tabs)');
  }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={isDark ? ['#0a0a0f', '#1a1a2e', '#16213e'] : ['#ffffff', '#f8faff', '#e3f2fd']}
        style={styles.gradient}
      >
        <View style={styles.content}>
          {/* Logo Section */}
          <View style={styles.logoContainer}>
            <View style={styles.logoWrapper}>
              <LinearGradient
                colors={['#6366f1', '#8b5cf6', '#ec4899']}
                style={styles.logoGradient}
              >
                <Ionicons name="sparkles" size={40} color="white" />
              </LinearGradient>
            </View>
            <Text style={styles.logoText}>SocialGenie</Text>
            <Text style={styles.logoSubtext}>AI</Text>
          </View>

          {/* Main Content */}
          <View style={styles.mainContent}>
            <Text style={styles.title}>
              Transform Your Social Media with AI Magic
            </Text>
            <Text style={styles.subtitle}>
              Create, schedule, and optimize your content across all platforms with the power of artificial intelligence.
            </Text>

            {/* Features */}
            <View style={styles.featureList}>
              {features.map((feature, index) => (
                <View key={index} style={styles.featureItem}>
                  <View style={styles.featureIcon}>
                    <Ionicons name={feature.icon} size={20} color="#6366f1" />
                  </View>
                  <Text style={styles.featureText}>{feature.text}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Get Started Button */}
          <View style={styles.buttonContainer}>
            <Pressable
              style={({ pressed }) => [
                styles.getStartedButton,
                pressed && styles.buttonPressed,
              ]}
              onPress={handleGetStarted}
            >
              <LinearGradient
                colors={['#6366f1', '#8b5cf6']}
                style={styles.buttonGradient}
              >
                <Text style={styles.buttonText}>Get Started</Text>
                <Ionicons name="arrow-forward" size={20} color="white" />
              </LinearGradient>
            </Pressable>

            <Text style={styles.footerText}>
              Join thousands of creators already using SocialGenie AI
            </Text>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const features = [
  {
    icon: 'bulb-outline' as const,
    text: 'AI-powered content suggestions',
  },
  {
    icon: 'calendar-outline' as const,
    text: 'Smart scheduling optimization',
  },
  {
    icon: 'analytics-outline' as const,
    text: 'Advanced performance analytics',
  },
  {
    icon: 'people-outline' as const,
    text: 'Multi-platform management',
  },
];

function createStyles(isDark: boolean) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? '#0a0a0f' : '#ffffff',
    },
    gradient: {
      flex: 1,
    },
    content: {
      flex: 1,
      paddingHorizontal: 24,
      justifyContent: 'space-between',
    },
    logoContainer: {
      alignItems: 'center',
      marginTop: height * 0.08,
    },
    logoWrapper: {
      marginBottom: 16,
    },
    logoGradient: {
      width: 80,
      height: 80,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#6366f1',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.3,
      shadowRadius: 16,
    },
    logoText: {
      fontSize: 28,
      fontWeight: '700',
      color: isDark ? '#ffffff' : '#1f2937',
      marginBottom: 4,
    },
    logoSubtext: {
      fontSize: 16,
      fontWeight: '600',
      color: '#6366f1',
      letterSpacing: 2,
    },
    mainContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 40,
    },
    title: {
      fontSize: 32,
      fontWeight: '800',
      textAlign: 'center',
      color: isDark ? '#ffffff' : '#1f2937',
      lineHeight: 40,
      marginBottom: 16,
    },
    subtitle: {
      fontSize: 18,
      textAlign: 'center',
      color: isDark ? '#9ca3af' : '#6b7280',
      lineHeight: 26,
      marginBottom: 40,
      paddingHorizontal: 8,
    },
    featureList: {
      width: '100%',
      maxWidth: 320,
    },
    featureItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,
      paddingHorizontal: 16,
      backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(99,102,241,0.05)',
      borderRadius: 12,
      marginBottom: 12,
    },
    featureIcon: {
      width: 40,
      height: 40,
      borderRadius: 10,
      backgroundColor: isDark ? 'rgba(99,102,241,0.2)' : 'rgba(99,102,241,0.1)',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 16,
    },
    featureText: {
      flex: 1,
      fontSize: 16,
      fontWeight: '500',
      color: isDark ? '#e5e7eb' : '#374151',
    },
    buttonContainer: {
      alignItems: 'center',
      paddingBottom: 24,
    },
    getStartedButton: {
      width: '100%',
      maxWidth: 320,
      borderRadius: 16,
      overflow: 'hidden',
      marginBottom: 16,
      shadowColor: '#6366f1',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.3,
      shadowRadius: 16,
    },
    buttonGradient: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 18,
      paddingHorizontal: 32,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: '600',
      color: 'white',
      marginRight: 8,
    },
    buttonPressed: {
      transform: [{ scale: 0.98 }],
    },
    footerText: {
      fontSize: 14,
      color: isDark ? '#9ca3af' : '#6b7280',
      textAlign: 'center',
    },
  });
}