import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useColorScheme,
  Pressable,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function DashboardScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const styles = createStyles(isDark);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good morning! 👋</Text>
            <Text style={styles.userName}>Welcome back, Alex</Text>
          </View>
          <Pressable style={styles.notificationButton}>
            <Ionicons 
              name="notifications-outline" 
              size={24} 
              color={isDark ? '#e5e7eb' : '#374151'} 
            />
            <View style={styles.notificationBadge} />
          </Pressable>
        </View>

        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <Text style={styles.sectionTitle}>Today's Overview</Text>
          <View style={styles.statsGrid}>
            {quickStats.map((stat, index) => (
              <View key={index} style={styles.statCard}>
                <LinearGradient
                  colors={stat.gradient}
                  style={styles.statGradient}
                >
                  <Ionicons name={stat.icon} size={24} color="white" />
                </LinearGradient>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
                <Text style={styles.statChange}>
                  {stat.change > 0 ? '+' : ''}{stat.change}%
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* AI Suggestions */}
        <View style={styles.suggestionsContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>AI Suggestions</Text>
            <Pressable style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>See All</Text>
            </Pressable>
          </View>
          
          <View style={styles.suggestionCard}>
            <LinearGradient
              colors={['#6366f1', '#8b5cf6']}
              style={styles.suggestionGradient}
            >
              <Ionicons name="sparkles" size={20} color="white" />
            </LinearGradient>
            <View style={styles.suggestionContent}>
              <Text style={styles.suggestionTitle}>Perfect Time to Post</Text>
              <Text style={styles.suggestionText}>
                Your audience is most active at 3:00 PM today. Schedule your next post now!
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#6366f1" />
          </View>

          <View style={styles.suggestionCard}>
            <LinearGradient
              colors={['#ec4899', '#f97316']}
              style={styles.suggestionGradient}
            >
              <Ionicons name="trending-up" size={20} color="white" />
            </LinearGradient>
            <View style={styles.suggestionContent}>
              <Text style={styles.suggestionTitle}>Trending Hashtags</Text>
              <Text style={styles.suggestionText}>
                #TechTips and #Innovation are trending in your niche. Use them now!
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#ec4899" />
          </View>
        </View>

        {/* Recent Posts */}
        <View style={styles.recentPostsContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Posts</Text>
            <Pressable style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>View All</Text>
            </Pressable>
          </View>

          {recentPosts.map((post, index) => (
            <View key={index} style={styles.postCard}>
              <View style={styles.postHeader}>
                <View style={styles.platformBadge}>
                  <Ionicons name={post.platform.icon} size={16} color={post.platform.color} />
                  <Text style={[styles.platformText, { color: post.platform.color }]}>
                    {post.platform.name}
                  </Text>
                </View>
                <Text style={styles.postTime}>{post.time}</Text>
              </View>
              <Text style={styles.postContent}>{post.content}</Text>
              <View style={styles.postStats}>
                <View style={styles.statItem}>
                  <Ionicons name="heart" size={14} color="#ef4444" />
                  <Text style={styles.statText}>{post.likes}</Text>
                </View>
                <View style={styles.statItem}>
                  <Ionicons name="chatbubble" size={14} color="#3b82f6" />
                  <Text style={styles.statText}>{post.comments}</Text>
                </View>
                <View style={styles.statItem}>
                  <Ionicons name="share" size={14} color="#10b981" />
                  <Text style={styles.statText}>{post.shares}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActionsContainer}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionsGrid}>
            {quickActions.map((action, index) => (
              <Pressable key={index} style={styles.actionCard}>
                <LinearGradient
                  colors={action.gradient}
                  style={styles.actionGradient}
                >
                  <Ionicons name={action.icon} size={24} color="white" />
                </LinearGradient>
                <Text style={styles.actionText}>{action.label}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const quickStats = [
  {
    icon: 'eye-outline' as const,
    value: '12.4K',
    label: 'Views',
    change: 12,
    gradient: ['#6366f1', '#8b5cf6'],
  },
  {
    icon: 'heart-outline' as const,
    value: '892',
    label: 'Likes',
    change: 8,
    gradient: ['#ef4444', '#f97316'],
  },
  {
    icon: 'chatbubble-outline' as const,
    value: '156',
    label: 'Comments',
    change: 15,
    gradient: ['#3b82f6', '#1d4ed8'],
  },
  {
    icon: 'share-outline' as const,
    value: '67',
    label: 'Shares',
    change: 5,
    gradient: ['#10b981', '#059669'],
  },
];

const recentPosts = [
  {
    platform: { name: 'Instagram', icon: 'logo-instagram' as const, color: '#e4405f' },
    time: '2h ago',
    content: 'Just launched our new AI-powered feature! 🚀 What do you think?',
    likes: '245',
    comments: '18',
    shares: '12',
  },
  {
    platform: { name: 'Twitter', icon: 'logo-twitter' as const, color: '#1da1f2' },
    time: '4h ago',
    content: 'The future of social media is here. AI is changing everything!',
    likes: '89',
    comments: '7',
    shares: '23',
  },
  {
    platform: { name: 'LinkedIn', icon: 'logo-linkedin' as const, color: '#0077b5' },
    time: '1d ago',
    content: 'Excited to share our latest insights on social media trends...',
    likes: '156',
    comments: '34',
    shares: '45',
  },
];

const quickActions = [
  {
    icon: 'create-outline' as const,
    label: 'Create Post',
    gradient: ['#6366f1', '#8b5cf6'],
  },
  {
    icon: 'calendar-outline' as const,
    label: 'Schedule',
    gradient: ['#10b981', '#059669'],
  },
  {
    icon: 'analytics-outline' as const,
    label: 'Analytics',
    gradient: ['#f59e0b', '#d97706'],
  },
  {
    icon: 'settings-outline' as const,
    label: 'Settings',
    gradient: ['#6b7280', '#4b5563'],
  },
];

function createStyles(isDark: boolean) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? '#0a0a0f' : '#f8fafc',
    },
    scrollView: {
      flex: 1,
    },
    contentContainer: {
      paddingBottom: 24,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 24,
      paddingVertical: 20,
      backgroundColor: isDark ? '#1a1a2e' : '#ffffff',
    },
    greeting: {
      fontSize: 16,
      color: isDark ? '#9ca3af' : '#6b7280',
      marginBottom: 4,
    },
    userName: {
      fontSize: 24,
      fontWeight: '700',
      color: isDark ? '#ffffff' : '#1f2937',
    },
    notificationButton: {
      position: 'relative',
      padding: 8,
    },
    notificationBadge: {
      position: 'absolute',
      top: 8,
      right: 8,
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#ef4444',
    },
    statsContainer: {
      paddingHorizontal: 24,
      paddingVertical: 20,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: isDark ? '#ffffff' : '#1f2937',
      marginBottom: 16,
    },
    statsGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    statCard: {
      width: (width - 72) / 2,
      backgroundColor: isDark ? '#1a1a2e' : '#ffffff',
      borderRadius: 16,
      padding: 20,
      marginBottom: 16,
      shadowColor: isDark ? '#000000' : '#1f2937',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: isDark ? 0.3 : 0.1,
      shadowRadius: 8,
    },
    statGradient: {
      width: 48,
      height: 48,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 12,
    },
    statValue: {
      fontSize: 24,
      fontWeight: '800',
      color: isDark ? '#ffffff' : '#1f2937',
      marginBottom: 4,
    },
    statLabel: {
      fontSize: 14,
      color: isDark ? '#9ca3af' : '#6b7280',
      marginBottom: 8,
    },
    statChange: {
      fontSize: 12,
      fontWeight: '600',
      color: '#10b981',
    },
    suggestionsContainer: {
      paddingHorizontal: 24,
      marginBottom: 24,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    seeAllButton: {
      paddingVertical: 4,
      paddingHorizontal: 8,
    },
    seeAllText: {
      fontSize: 14,
      color: '#6366f1',
      fontWeight: '600',
    },
    suggestionCard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: isDark ? '#1a1a2e' : '#ffffff',
      borderRadius: 16,
      padding: 16,
      marginBottom: 12,
      shadowColor: isDark ? '#000000' : '#1f2937',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: isDark ? 0.3 : 0.1,
      shadowRadius: 8,
    },
    suggestionGradient: {
      width: 40,
      height: 40,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 16,
    },
    suggestionContent: {
      flex: 1,
    },
    suggestionTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: isDark ? '#ffffff' : '#1f2937',
      marginBottom: 4,
    },
    suggestionText: {
      fontSize: 14,
      color: isDark ? '#9ca3af' : '#6b7280',
      lineHeight: 20,
    },
    recentPostsContainer: {
      paddingHorizontal: 24,
      marginBottom: 24,
    },
    postCard: {
      backgroundColor: isDark ? '#1a1a2e' : '#ffffff',
      borderRadius: 16,
      padding: 16,
      marginBottom: 12,
      shadowColor: isDark ? '#000000' : '#1f2937',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: isDark ? 0.3 : 0.1,
      shadowRadius: 8,
    },
    postHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
    },
    platformBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 8,
    },
    platformText: {
      fontSize: 12,
      fontWeight: '600',
      marginLeft: 4,
    },
    postTime: {
      fontSize: 12,
      color: isDark ? '#9ca3af' : '#6b7280',
    },
    postContent: {
      fontSize: 16,
      color: isDark ? '#e5e7eb' : '#374151',
      lineHeight: 24,
      marginBottom: 16,
    },
    postStats: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    statItem: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    statText: {
      fontSize: 14,
      color: isDark ? '#9ca3af' : '#6b7280',
      marginLeft: 4,
      fontWeight: '500',
    },
    quickActionsContainer: {
      paddingHorizontal: 24,
    },
    actionsGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    actionCard: {
      width: (width - 72) / 2,
      alignItems: 'center',
      backgroundColor: isDark ? '#1a1a2e' : '#ffffff',
      borderRadius: 16,
      padding: 20,
      marginBottom: 16,
      shadowColor: isDark ? '#000000' : '#1f2937',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: isDark ? 0.3 : 0.1,
      shadowRadius: 8,
    },
    actionGradient: {
      width: 48,
      height: 48,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 12,
    },
    actionText: {
      fontSize: 14,
      fontWeight: '600',
      color: isDark ? '#e5e7eb' : '#374151',
      textAlign: 'center',
    },
  });
}