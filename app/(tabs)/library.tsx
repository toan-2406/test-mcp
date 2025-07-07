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

export default function LibraryScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const styles = createStyles(isDark);

  const [selectedFilter, setSelectedFilter] = useState('all');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Content Library</Text>
          <Pressable style={styles.searchButton}>
            <Ionicons name="search-outline" size={20} color="#6366f1" />
          </Pressable>
        </View>

        {/* Filter Tabs */}
        <View style={styles.filterContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {filters.map((filter) => (
              <Pressable
                key={filter.value}
                style={[
                  styles.filterButton,
                  selectedFilter === filter.value && styles.filterButtonActive,
                ]}
                onPress={() => setSelectedFilter(filter.value)}
              >
                <Text
                  style={[
                    styles.filterButtonText,
                    selectedFilter === filter.value && styles.filterButtonTextActive,
                  ]}
                >
                  {filter.label}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* Stats Summary */}
        <View style={styles.statsSection}>
          <View style={styles.statsGrid}>
            {libraryStats.map((stat, index) => (
              <View key={index} style={styles.statCard}>
                <LinearGradient
                  colors={stat.gradient}
                  style={styles.statIcon}
                >
                  <Ionicons name={stat.icon} size={20} color="white" />
                </LinearGradient>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Content Grid */}
        <View style={styles.contentSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Content</Text>
            <Pressable style={styles.viewToggle}>
              <Ionicons name="grid-outline" size={20} color="#6366f1" />
            </Pressable>
          </View>

          <View style={styles.contentGrid}>
            {contentItems.map((item, index) => (
              <View key={index} style={styles.contentCard}>
                <View style={styles.contentHeader}>
                  <View style={styles.contentType}>
                    <LinearGradient
                      colors={item.type.gradient}
                      style={styles.contentTypeIcon}
                    >
                      <Ionicons name={item.type.icon} size={16} color="white" />
                    </LinearGradient>
                  </View>
                  <View style={styles.contentStatus}>
                    <View style={[styles.statusDot, { backgroundColor: item.status.color }]} />
                    <Text style={[styles.statusText, { color: item.status.color }]}>
                      {item.status.label}
                    </Text>
                  </View>
                </View>

                <View style={styles.contentPreview}>
                  <Text style={styles.contentText} numberOfLines={3}>
                    {item.content}
                  </Text>
                </View>

                <View style={styles.contentFooter}>
                  <View style={styles.contentPlatforms}>
                    {item.platforms.map((platform, platformIndex) => (
                      <View
                        key={platformIndex}
                        style={[styles.platformBadge, { backgroundColor: platform.color }]}
                      >
                        <Ionicons name={platform.icon} size={12} color="white" />
                      </View>
                    ))}
                  </View>
                  <Text style={styles.contentDate}>{item.date}</Text>
                </View>

                <View style={styles.contentActions}>
                  <Pressable style={styles.actionButton}>
                    <Ionicons name="create-outline" size={16} color="#6366f1" />
                  </Pressable>
                  <Pressable style={styles.actionButton}>
                    <Ionicons name="copy-outline" size={16} color="#6366f1" />
                  </Pressable>
                  <Pressable style={styles.actionButton}>
                    <Ionicons name="trash-outline" size={16} color="#ef4444" />
                  </Pressable>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Templates Section */}
        <View style={styles.templatesSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>AI Templates</Text>
            <Pressable style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>View All</Text>
            </Pressable>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {templates.map((template, index) => (
              <Pressable key={index} style={styles.templateCard}>
                <LinearGradient
                  colors={template.gradient}
                  style={styles.templateIcon}
                >
                  <Ionicons name={template.icon} size={24} color="white" />
                </LinearGradient>
                <Text style={styles.templateTitle}>{template.title}</Text>
                <Text style={styles.templateDescription}>{template.description}</Text>
                <Pressable style={styles.useTemplateButton}>
                  <Text style={styles.useTemplateText}>Use Template</Text>
                </Pressable>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* Drafts Section */}
        <View style={styles.draftsSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Drafts</Text>
            <Text style={styles.draftsCount}>4 drafts</Text>
          </View>

          {drafts.map((draft, index) => (
            <View key={index} style={styles.draftCard}>
              <View style={styles.draftHeader}>
                <Text style={styles.draftTitle}>Draft #{index + 1}</Text>
                <Text style={styles.draftDate}>{draft.date}</Text>
              </View>
              <Text style={styles.draftContent} numberOfLines={2}>
                {draft.content}
              </Text>
              <View style={styles.draftActions}>
                <Pressable style={styles.draftAction}>
                  <Ionicons name="create-outline" size={16} color="#6366f1" />
                  <Text style={styles.draftActionText}>Edit</Text>
                </Pressable>
                <Pressable style={styles.draftAction}>
                  <Ionicons name="send-outline" size={16} color="#10b981" />
                  <Text style={[styles.draftActionText, { color: '#10b981' }]}>Publish</Text>
                </Pressable>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Published', value: 'published' },
  { label: 'Scheduled', value: 'scheduled' },
  { label: 'Drafts', value: 'drafts' },
  { label: 'Images', value: 'images' },
  { label: 'Videos', value: 'videos' },
];

const libraryStats = [
  {
    icon: 'document-text-outline' as const,
    value: '127',
    label: 'Total Posts',
    gradient: ['#6366f1', '#8b5cf6'],
  },
  {
    icon: 'image-outline' as const,
    value: '43',
    label: 'Images',
    gradient: ['#10b981', '#059669'],
  },
  {
    icon: 'videocam-outline' as const,
    value: '12',
    label: 'Videos',
    gradient: ['#f59e0b', '#d97706'],
  },
  {
    icon: 'create-outline' as const,
    value: '8',
    label: 'Drafts',
    gradient: ['#ef4444', '#dc2626'],
  },
];

const contentItems = [
  {
    type: {
      icon: 'image-outline' as const,
      gradient: ['#10b981', '#059669'],
    },
    status: {
      label: 'Published',
      color: '#10b981',
    },
    content: 'Just launched our new AI-powered feature! 🚀 What do you think about this game-changing technology?',
    platforms: [
      { icon: 'logo-instagram' as const, color: '#e4405f' },
      { icon: 'logo-twitter' as const, color: '#1da1f2' },
    ],
    date: '2 days ago',
  },
  {
    type: {
      icon: 'videocam-outline' as const,
      gradient: ['#f59e0b', '#d97706'],
    },
    status: {
      label: 'Scheduled',
      color: '#6366f1',
    },
    content: 'Behind the scenes look at our creative process. The future of content creation is here!',
    platforms: [
      { icon: 'logo-instagram' as const, color: '#e4405f' },
      { icon: 'logo-tiktok' as const, color: '#000000' },
    ],
    date: 'Tomorrow 3PM',
  },
  {
    type: {
      icon: 'document-text-outline' as const,
      gradient: ['#6366f1', '#8b5cf6'],
    },
    status: {
      label: 'Draft',
      color: '#6b7280',
    },
    content: 'Tips for creating engaging social media content that your audience will love...',
    platforms: [
      { icon: 'logo-linkedin' as const, color: '#0077b5' },
    ],
    date: '1 week ago',
  },
  {
    type: {
      icon: 'image-outline' as const,
      gradient: ['#ec4899', '#f97316'],
    },
    status: {
      label: 'Published',
      color: '#10b981',
    },
    content: 'Monday motivation! Your unique voice matters in this digital world. Keep creating! 💪',
    platforms: [
      { icon: 'logo-instagram' as const, color: '#e4405f' },
      { icon: 'logo-facebook' as const, color: '#1877f2' },
      { icon: 'logo-twitter' as const, color: '#1da1f2' },
    ],
    date: '3 days ago',
  },
];

const templates = [
  {
    icon: 'trending-up' as const,
    title: 'Trending Post',
    description: 'Capitalize on trending topics',
    gradient: ['#6366f1', '#8b5cf6'],
  },
  {
    icon: 'bulb-outline' as const,
    title: 'Tips & Advice',
    description: 'Share valuable insights',
    gradient: ['#10b981', '#059669'],
  },
  {
    icon: 'heart' as const,
    title: 'Motivational',
    description: 'Inspire your audience',
    gradient: ['#ec4899', '#f97316'],
  },
  {
    icon: 'chatbubble-outline' as const,
    title: 'Question Post',
    description: 'Boost engagement',
    gradient: ['#f59e0b', '#d97706'],
  },
];

const drafts = [
  {
    content: 'Exploring the future of AI in social media marketing. What trends do you think will dominate 2024?',
    date: '2 hours ago',
  },
  {
    content: 'Behind the scenes of our latest product development. The journey from idea to reality!',
    date: '1 day ago',
  },
  {
    content: 'Weekend inspiration: Every expert was once a beginner. Keep learning, keep growing!',
    date: '3 days ago',
  },
  {
    content: '5 game-changing tools that every content creator should know about in 2024...',
    date: '1 week ago',
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
    searchButton: {
      padding: 8,
      backgroundColor: isDark ? '#374151' : '#f3f4f6',
      borderRadius: 8,
    },
    filterContainer: {
      paddingVertical: 16,
      paddingLeft: 24,
      backgroundColor: isDark ? '#1a1a2e' : '#ffffff',
      borderBottomWidth: 1,
      borderBottomColor: isDark ? '#374151' : '#e5e7eb',
    },
    filterButton: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 20,
      marginRight: 12,
      backgroundColor: isDark ? '#374151' : '#f3f4f6',
    },
    filterButtonActive: {
      backgroundColor: '#6366f1',
    },
    filterButtonText: {
      fontSize: 14,
      fontWeight: '600',
      color: isDark ? '#9ca3af' : '#6b7280',
    },
    filterButtonTextActive: {
      color: 'white',
    },
    statsSection: {
      paddingHorizontal: 24,
      paddingVertical: 20,
    },
    statsGrid: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    statCard: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: isDark ? '#1a1a2e' : '#ffffff',
      borderRadius: 16,
      padding: 16,
      marginHorizontal: 4,
      shadowColor: isDark ? '#000000' : '#1f2937',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: isDark ? 0.3 : 0.1,
      shadowRadius: 8,
    },
    statIcon: {
      width: 40,
      height: 40,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 8,
    },
    statValue: {
      fontSize: 20,
      fontWeight: '700',
      color: isDark ? '#ffffff' : '#1f2937',
      marginBottom: 4,
    },
    statLabel: {
      fontSize: 12,
      color: isDark ? '#9ca3af' : '#6b7280',
      textAlign: 'center',
    },
    contentSection: {
      paddingHorizontal: 24,
      marginBottom: 24,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: isDark ? '#ffffff' : '#1f2937',
    },
    viewToggle: {
      padding: 8,
      backgroundColor: isDark ? '#374151' : '#f3f4f6',
      borderRadius: 8,
    },
    contentGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    contentCard: {
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
    contentHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
    },
    contentType: {
      width: 32,
      height: 32,
    },
    contentTypeIcon: {
      width: '100%',
      height: '100%',
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    contentStatus: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    statusDot: {
      width: 6,
      height: 6,
      borderRadius: 3,
      marginRight: 4,
    },
    statusText: {
      fontSize: 10,
      fontWeight: '600',
    },
    contentPreview: {
      marginBottom: 12,
    },
    contentText: {
      fontSize: 12,
      color: isDark ? '#e5e7eb' : '#374151',
      lineHeight: 16,
    },
    contentFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
    },
    contentPlatforms: {
      flexDirection: 'row',
    },
    platformBadge: {
      width: 20,
      height: 20,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 4,
    },
    contentDate: {
      fontSize: 10,
      color: isDark ? '#9ca3af' : '#6b7280',
    },
    contentActions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    actionButton: {
      padding: 6,
      backgroundColor: isDark ? '#374151' : '#f3f4f6',
      borderRadius: 6,
    },
    templatesSection: {
      paddingLeft: 24,
      marginBottom: 24,
    },
    seeAllButton: {
      paddingHorizontal: 8,
      paddingVertical: 4,
    },
    seeAllText: {
      fontSize: 14,
      color: '#6366f1',
      fontWeight: '600',
    },
    templateCard: {
      width: 160,
      backgroundColor: isDark ? '#1a1a2e' : '#ffffff',
      borderRadius: 16,
      padding: 16,
      marginRight: 12,
      shadowColor: isDark ? '#000000' : '#1f2937',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: isDark ? 0.3 : 0.1,
      shadowRadius: 8,
    },
    templateIcon: {
      width: 48,
      height: 48,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 12,
    },
    templateTitle: {
      fontSize: 14,
      fontWeight: '600',
      color: isDark ? '#ffffff' : '#1f2937',
      marginBottom: 4,
    },
    templateDescription: {
      fontSize: 12,
      color: isDark ? '#9ca3af' : '#6b7280',
      lineHeight: 16,
      marginBottom: 12,
    },
    useTemplateButton: {
      backgroundColor: '#6366f1',
      borderRadius: 8,
      paddingVertical: 8,
      alignItems: 'center',
    },
    useTemplateText: {
      fontSize: 12,
      fontWeight: '600',
      color: 'white',
    },
    draftsSection: {
      paddingHorizontal: 24,
    },
    draftsCount: {
      fontSize: 14,
      color: isDark ? '#9ca3af' : '#6b7280',
    },
    draftCard: {
      backgroundColor: isDark ? '#1a1a2e' : '#ffffff',
      borderRadius: 16,
      padding: 16,
      marginBottom: 12,
      shadowColor: isDark ? '#000000' : '#1f2937',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: isDark ? 0.3 : 0.1,
      shadowRadius: 8,
    },
    draftHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8,
    },
    draftTitle: {
      fontSize: 14,
      fontWeight: '600',
      color: isDark ? '#ffffff' : '#1f2937',
    },
    draftDate: {
      fontSize: 12,
      color: isDark ? '#9ca3af' : '#6b7280',
    },
    draftContent: {
      fontSize: 14,
      color: isDark ? '#e5e7eb' : '#374151',
      lineHeight: 20,
      marginBottom: 12,
    },
    draftActions: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    draftAction: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 12,
      paddingVertical: 6,
      backgroundColor: isDark ? '#374151' : '#f3f4f6',
      borderRadius: 8,
      marginLeft: 8,
    },
    draftActionText: {
      fontSize: 12,
      fontWeight: '600',
      color: '#6366f1',
      marginLeft: 4,
    },
  });
}