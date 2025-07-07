import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  useColorScheme,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function AnalyticsScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const styles = createStyles(isDark);

  const [selectedPeriod, setSelectedPeriod] = useState('7d');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Analytics</Text>
          <Pressable style={styles.exportButton}>
            <Ionicons name="download-outline" size={20} color="#6366f1" />
            <Text style={styles.exportText}>Export</Text>
          </Pressable>
        </View>

        {/* Time Period Selector */}
        <View style={styles.periodSelector}>
          {timePeriods.map((period) => (
            <Pressable
              key={period.value}
              style={[
                styles.periodButton,
                selectedPeriod === period.value && styles.periodButtonActive,
              ]}
              onPress={() => setSelectedPeriod(period.value)}
            >
              <Text
                style={[
                  styles.periodButtonText,
                  selectedPeriod === period.value && styles.periodButtonTextActive,
                ]}
              >
                {period.label}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Overview Stats */}
        <View style={styles.overviewSection}>
          <Text style={styles.sectionTitle}>Overview</Text>
          <View style={styles.statsGrid}>
            {overviewStats.map((stat, index) => (
              <View key={index} style={styles.statCard}>
                <View style={styles.statHeader}>
                  <View style={[styles.statIcon, { backgroundColor: stat.color }]}>
                    <Ionicons name={stat.icon} size={20} color="white" />
                  </View>
                  <View style={styles.statTrend}>
                    <Ionicons 
                      name={stat.change > 0 ? "trending-up" : "trending-down"} 
                      size={14} 
                      color={stat.change > 0 ? "#10b981" : "#ef4444"} 
                    />
                    <Text style={[styles.statChangeText, { 
                      color: stat.change > 0 ? "#10b981" : "#ef4444" 
                    }]}>
                      {Math.abs(stat.change)}%
                    </Text>
                  </View>
                </View>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Performance Chart */}
        <View style={styles.chartSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Performance Trends</Text>
            <Pressable style={styles.chartTypeButton}>
              <Text style={styles.chartTypeText}>Engagement</Text>
              <Ionicons name="chevron-down" size={16} color="#6366f1" />
            </Pressable>
          </View>

          <View style={styles.chartContainer}>
            <View style={styles.chart}>
              {/* Simulated Chart Bars */}
              <View style={styles.chartBars}>
                {chartData.map((data, index) => (
                  <View key={index} style={styles.chartBarContainer}>
                    <View style={styles.chartBar}>
                      <LinearGradient
                        colors={['#6366f1', '#8b5cf6']}
                        style={[styles.chartBarFill, { height: `${data.value}%` }]}
                      />
                    </View>
                    <Text style={styles.chartLabel}>{data.label}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>

        {/* Platform Performance */}
        <View style={styles.platformSection}>
          <Text style={styles.sectionTitle}>Platform Performance</Text>
          {platformPerformance.map((platform, index) => (
            <View key={index} style={styles.platformCard}>
              <View style={styles.platformHeader}>
                <View style={styles.platformInfo}>
                  <View style={[styles.platformIcon, { backgroundColor: platform.color }]}>
                    <Ionicons name={platform.icon} size={20} color="white" />
                  </View>
                  <View>
                    <Text style={styles.platformName}>{platform.name}</Text>
                    <Text style={styles.platformAudience}>{platform.audience}</Text>
                  </View>
                </View>
                <View style={styles.platformMetrics}>
                  <Text style={styles.platformEngagement}>{platform.engagement}</Text>
                  <Text style={styles.platformEngagementLabel}>Engagement</Text>
                </View>
              </View>
              
              <View style={styles.platformStats}>
                <View style={styles.platformStat}>
                  <Text style={styles.platformStatValue}>{platform.reach}</Text>
                  <Text style={styles.platformStatLabel}>Reach</Text>
                </View>
                <View style={styles.platformStat}>
                  <Text style={styles.platformStatValue}>{platform.impressions}</Text>
                  <Text style={styles.platformStatLabel}>Impressions</Text>
                </View>
                <View style={styles.platformStat}>
                  <Text style={styles.platformStatValue}>{platform.clicks}</Text>
                  <Text style={styles.platformStatLabel}>Clicks</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Best Performing Posts */}
        <View style={styles.topPostsSection}>
          <Text style={styles.sectionTitle}>Top Performing Posts</Text>
          {topPosts.map((post, index) => (
            <View key={index} style={styles.topPostCard}>
              <View style={styles.topPostHeader}>
                <View style={styles.topPostRank}>
                  <Text style={styles.topPostRankText}>#{index + 1}</Text>
                </View>
                <View style={styles.topPostPlatform}>
                  <Ionicons name={post.platform.icon} size={16} color={post.platform.color} />
                  <Text style={[styles.topPostPlatformText, { color: post.platform.color }]}>
                    {post.platform.name}
                  </Text>
                </View>
                <Text style={styles.topPostDate}>{post.date}</Text>
              </View>
              
              <Text style={styles.topPostContent}>{post.content}</Text>
              
              <View style={styles.topPostMetrics}>
                <View style={styles.topPostMetric}>
                  <Ionicons name="heart" size={14} color="#ef4444" />
                  <Text style={styles.topPostMetricText}>{post.likes}</Text>
                </View>
                <View style={styles.topPostMetric}>
                  <Ionicons name="chatbubble" size={14} color="#3b82f6" />
                  <Text style={styles.topPostMetricText}>{post.comments}</Text>
                </View>
                <View style={styles.topPostMetric}>
                  <Ionicons name="share" size={14} color="#10b981" />
                  <Text style={styles.topPostMetricText}>{post.shares}</Text>
                </View>
                <View style={styles.topPostMetric}>
                  <Ionicons name="eye" size={14} color="#8b5cf6" />
                  <Text style={styles.topPostMetricText}>{post.reach}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* AI Insights */}
        <View style={styles.insightsSection}>
          <Text style={styles.sectionTitle}>AI Insights</Text>
          {aiInsights.map((insight, index) => (
            <View key={index} style={styles.insightCard}>
              <LinearGradient
                colors={insight.gradient}
                style={styles.insightIcon}
              >
                <Ionicons name={insight.icon} size={20} color="white" />
              </LinearGradient>
              <View style={styles.insightContent}>
                <Text style={styles.insightTitle}>{insight.title}</Text>
                <Text style={styles.insightDescription}>{insight.description}</Text>
              </View>
              <Pressable style={styles.insightAction}>
                <Text style={styles.insightActionText}>Apply</Text>
              </Pressable>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const timePeriods = [
  { label: '7D', value: '7d' },
  { label: '30D', value: '30d' },
  { label: '90D', value: '90d' },
  { label: '1Y', value: '1y' },
];

const overviewStats = [
  {
    icon: 'eye-outline' as const,
    value: '45.2K',
    label: 'Total Reach',
    change: 12.5,
    color: '#6366f1',
  },
  {
    icon: 'heart-outline' as const,
    value: '3.8K',
    label: 'Engagement',
    change: 8.3,
    color: '#ef4444',
  },
  {
    icon: 'people-outline' as const,
    value: '892',
    label: 'New Followers',
    change: 15.2,
    color: '#10b981',
  },
  {
    icon: 'trending-up-outline' as const,
    value: '4.2%',
    label: 'Engagement Rate',
    change: -2.1,
    color: '#f59e0b',
  },
];

const chartData = [
  { label: 'Mon', value: 60 },
  { label: 'Tue', value: 45 },
  { label: 'Wed', value: 80 },
  { label: 'Thu', value: 35 },
  { label: 'Fri', value: 90 },
  { label: 'Sat', value: 70 },
  { label: 'Sun', value: 55 },
];

const platformPerformance = [
  {
    name: 'Instagram',
    icon: 'logo-instagram' as const,
    color: '#e4405f',
    audience: '2.5K followers',
    engagement: '4.8%',
    reach: '12.4K',
    impressions: '18.7K',
    clicks: '892',
  },
  {
    name: 'Twitter',
    icon: 'logo-twitter' as const,
    color: '#1da1f2',
    audience: '1.8K followers',
    engagement: '3.2%',
    reach: '8.9K',
    impressions: '14.2K',
    clicks: '456',
  },
  {
    name: 'LinkedIn',
    icon: 'logo-linkedin' as const,
    color: '#0077b5',
    audience: '892 connections',
    engagement: '6.1%',
    reach: '5.4K',
    impressions: '9.8K',
    clicks: '234',
  },
];

const topPosts = [
  {
    platform: { name: 'Instagram', icon: 'logo-instagram' as const, color: '#e4405f' },
    date: '3 days ago',
    content: 'Just launched our new AI-powered feature! 🚀 What do you think?',
    likes: '2.4K',
    comments: '189',
    shares: '67',
    reach: '8.9K',
  },
  {
    platform: { name: 'Twitter', icon: 'logo-twitter' as const, color: '#1da1f2' },
    date: '5 days ago',
    content: 'The future of social media is here. AI is changing everything!',
    likes: '1.8K',
    comments: '156',
    shares: '234',
    reach: '12.4K',
  },
  {
    platform: { name: 'LinkedIn', icon: 'logo-linkedin' as const, color: '#0077b5' },
    date: '1 week ago',
    content: 'Excited to share our latest insights on social media trends...',
    likes: '892',
    comments: '78',
    shares: '145',
    reach: '5.6K',
  },
];

const aiInsights = [
  {
    icon: 'time-outline' as const,
    title: 'Optimal Posting Time',
    description: 'Your audience is most active between 3-5 PM. Consider scheduling more posts during this window.',
    gradient: ['#6366f1', '#8b5cf6'],
  },
  {
    icon: 'trending-up-outline' as const,
    title: 'Trending Hashtags',
    description: '#TechInnovation and #AIRevolution are trending in your niche. Use them to increase reach.',
    gradient: ['#10b981', '#059669'],
  },
  {
    icon: 'people-outline' as const,
    title: 'Audience Growth',
    description: 'Video content generates 40% more engagement. Try posting more video content.',
    gradient: ['#f59e0b', '#d97706'],
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
    title: {
      fontSize: 24,
      fontWeight: '700',
      color: isDark ? '#ffffff' : '#1f2937',
    },
    exportButton: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 12,
      paddingVertical: 8,
      backgroundColor: isDark ? '#374151' : '#f3f4f6',
      borderRadius: 8,
    },
    exportText: {
      fontSize: 14,
      fontWeight: '600',
      color: '#6366f1',
      marginLeft: 4,
    },
    periodSelector: {
      flexDirection: 'row',
      paddingHorizontal: 24,
      paddingVertical: 16,
      backgroundColor: isDark ? '#1a1a2e' : '#ffffff',
      borderBottomWidth: 1,
      borderBottomColor: isDark ? '#374151' : '#e5e7eb',
    },
    periodButton: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 20,
      marginRight: 8,
      backgroundColor: isDark ? '#374151' : '#f3f4f6',
    },
    periodButtonActive: {
      backgroundColor: '#6366f1',
    },
    periodButtonText: {
      fontSize: 14,
      fontWeight: '600',
      color: isDark ? '#9ca3af' : '#6b7280',
    },
    periodButtonTextActive: {
      color: 'white',
    },
    overviewSection: {
      paddingHorizontal: 24,
      paddingVertical: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: isDark ? '#ffffff' : '#1f2937',
      marginBottom: 16,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
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
      padding: 16,
      marginBottom: 16,
      shadowColor: isDark ? '#000000' : '#1f2937',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: isDark ? 0.3 : 0.1,
      shadowRadius: 8,
    },
    statHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
    },
    statIcon: {
      width: 32,
      height: 32,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    statTrend: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    statChangeText: {
      fontSize: 12,
      fontWeight: '600',
      marginLeft: 2,
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
    },
    chartSection: {
      paddingHorizontal: 24,
      marginBottom: 24,
    },
    chartTypeButton: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 12,
      paddingVertical: 6,
      backgroundColor: isDark ? '#374151' : '#f3f4f6',
      borderRadius: 8,
    },
    chartTypeText: {
      fontSize: 14,
      fontWeight: '600',
      color: '#6366f1',
      marginRight: 4,
    },
    chartContainer: {
      backgroundColor: isDark ? '#1a1a2e' : '#ffffff',
      borderRadius: 16,
      padding: 20,
      shadowColor: isDark ? '#000000' : '#1f2937',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: isDark ? 0.3 : 0.1,
      shadowRadius: 8,
    },
    chart: {
      height: 200,
    },
    chartBars: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      paddingBottom: 20,
    },
    chartBarContainer: {
      flex: 1,
      alignItems: 'center',
    },
    chartBar: {
      width: 24,
      height: 140,
      backgroundColor: isDark ? '#374151' : '#f3f4f6',
      borderRadius: 4,
      overflow: 'hidden',
      marginBottom: 8,
    },
    chartBarFill: {
      width: '100%',
      position: 'absolute',
      bottom: 0,
      borderRadius: 4,
    },
    chartLabel: {
      fontSize: 12,
      color: isDark ? '#9ca3af' : '#6b7280',
    },
    platformSection: {
      paddingHorizontal: 24,
      marginBottom: 24,
    },
    platformCard: {
      backgroundColor: isDark ? '#1a1a2e' : '#ffffff',
      borderRadius: 16,
      padding: 20,
      marginBottom: 16,
      shadowColor: isDark ? '#000000' : '#1f2937',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: isDark ? 0.3 : 0.1,
      shadowRadius: 8,
    },
    platformHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    platformInfo: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    platformIcon: {
      width: 40,
      height: 40,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 12,
    },
    platformName: {
      fontSize: 16,
      fontWeight: '600',
      color: isDark ? '#ffffff' : '#1f2937',
    },
    platformAudience: {
      fontSize: 12,
      color: isDark ? '#9ca3af' : '#6b7280',
    },
    platformMetrics: {
      alignItems: 'flex-end',
    },
    platformEngagement: {
      fontSize: 20,
      fontWeight: '700',
      color: isDark ? '#ffffff' : '#1f2937',
    },
    platformEngagementLabel: {
      fontSize: 12,
      color: isDark ? '#9ca3af' : '#6b7280',
    },
    platformStats: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    platformStat: {
      alignItems: 'center',
    },
    platformStatValue: {
      fontSize: 16,
      fontWeight: '600',
      color: isDark ? '#ffffff' : '#1f2937',
    },
    platformStatLabel: {
      fontSize: 12,
      color: isDark ? '#9ca3af' : '#6b7280',
      marginTop: 2,
    },
    topPostsSection: {
      paddingHorizontal: 24,
      marginBottom: 24,
    },
    topPostCard: {
      backgroundColor: isDark ? '#1a1a2e' : '#ffffff',
      borderRadius: 16,
      padding: 16,
      marginBottom: 12,
      shadowColor: isDark ? '#000000' : '#1f2937',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: isDark ? 0.3 : 0.1,
      shadowRadius: 8,
    },
    topPostHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
    },
    topPostRank: {
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: '#6366f1',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 12,
    },
    topPostRankText: {
      fontSize: 12,
      fontWeight: '700',
      color: 'white',
    },
    topPostPlatform: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    topPostPlatformText: {
      fontSize: 12,
      fontWeight: '600',
      marginLeft: 4,
    },
    topPostDate: {
      fontSize: 12,
      color: isDark ? '#9ca3af' : '#6b7280',
    },
    topPostContent: {
      fontSize: 14,
      color: isDark ? '#e5e7eb' : '#374151',
      lineHeight: 20,
      marginBottom: 12,
    },
    topPostMetrics: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    topPostMetric: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    topPostMetricText: {
      fontSize: 12,
      color: isDark ? '#9ca3af' : '#6b7280',
      marginLeft: 4,
      fontWeight: '500',
    },
    insightsSection: {
      paddingHorizontal: 24,
    },
    insightCard: {
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
    insightIcon: {
      width: 40,
      height: 40,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 16,
    },
    insightContent: {
      flex: 1,
    },
    insightTitle: {
      fontSize: 14,
      fontWeight: '600',
      color: isDark ? '#ffffff' : '#1f2937',
      marginBottom: 4,
    },
    insightDescription: {
      fontSize: 12,
      color: isDark ? '#9ca3af' : '#6b7280',
      lineHeight: 16,
    },
    insightAction: {
      paddingHorizontal: 12,
      paddingVertical: 6,
      backgroundColor: isDark ? '#374151' : '#f3f4f6',
      borderRadius: 8,
    },
    insightActionText: {
      fontSize: 12,
      fontWeight: '600',
      color: '#6366f1',
    },
  });
}