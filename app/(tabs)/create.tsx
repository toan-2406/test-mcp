import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  useColorScheme,
  Dimensions,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function CreateScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const styles = createStyles(isDark);

  const [postContent, setPostContent] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  function handlePlatformToggle(platformId: string) {
    setSelectedPlatforms(prev => 
      prev.includes(platformId)
        ? prev.filter(id => id !== platformId)
        : [...prev, platformId]
    );
  }

  function handleGenerateContent() {
    setIsGenerating(true);
    // Simulate AI content generation
    setTimeout(() => {
      const suggestions = [
        "🚀 Just discovered an amazing new feature that's going to revolutionize how we create content! The future is here and it's powered by AI. What do you think about this game-changing technology? #Innovation #AI #Future",
        "✨ The power of artificial intelligence continues to amaze me. Today's breakthrough in content creation opens up endless possibilities for creators worldwide. Who else is excited about what's coming next? #CreatorEconomy #TechTrends",
        "🌟 Transform your creative process with the latest AI tools! From ideation to execution, technology is making it easier than ever to bring your vision to life. Share your experience in the comments! #CreativeTools #AI"
      ];
      
      const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
      setPostContent(randomSuggestion);
      setIsGenerating(false);
    }, 2000);
  }

  function handleSchedulePost() {
    if (!postContent.trim()) {
      Alert.alert('Error', 'Please write some content for your post');
      return;
    }
    if (selectedPlatforms.length === 0) {
      Alert.alert('Error', 'Please select at least one platform');
      return;
    }
    
    Alert.alert('Success', 'Your post has been scheduled successfully!');
    setPostContent('');
    setSelectedPlatforms([]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Create Post</Text>
          <Pressable style={styles.aiButton} onPress={handleGenerateContent}>
            <LinearGradient
              colors={['#6366f1', '#8b5cf6']}
              style={styles.aiButtonGradient}
            >
              <Ionicons name="sparkles" size={16} color="white" />
              <Text style={styles.aiButtonText}>AI Assist</Text>
            </LinearGradient>
          </Pressable>
        </View>

        {/* Content Input */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionTitle}>What's on your mind?</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Write your post here... or use AI to generate content"
              placeholderTextColor={isDark ? '#6b7280' : '#9ca3af'}
              multiline
              numberOfLines={8}
              value={postContent}
              onChangeText={setPostContent}
              textAlignVertical="top"
            />
            {isGenerating && (
              <View style={styles.generatingOverlay}>
                <LinearGradient
                  colors={['rgba(99,102,241,0.1)', 'rgba(139,92,246,0.1)']}
                  style={styles.generatingGradient}
                >
                  <Ionicons name="sparkles" size={24} color="#6366f1" />
                  <Text style={styles.generatingText}>AI is generating content...</Text>
                </LinearGradient>
              </View>
            )}
          </View>
          
          <View style={styles.characterCount}>
            <Text style={styles.characterText}>{postContent.length}/280</Text>
          </View>
        </View>

        {/* AI Suggestions */}
        <View style={styles.suggestionsSection}>
          <Text style={styles.sectionTitle}>AI Suggestions</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {aiSuggestions.map((suggestion, index) => (
              <Pressable
                key={index}
                style={styles.suggestionCard}
                onPress={() => setPostContent(suggestion.content)}
              >
                <LinearGradient
                  colors={suggestion.gradient}
                  style={styles.suggestionGradient}
                >
                  <Ionicons name={suggestion.icon} size={20} color="white" />
                </LinearGradient>
                <Text style={styles.suggestionTitle}>{suggestion.title}</Text>
                <Text style={styles.suggestionText}>{suggestion.preview}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* Platform Selection */}
        <View style={styles.platformSection}>
          <Text style={styles.sectionTitle}>Select Platforms</Text>
          <View style={styles.platformGrid}>
            {platforms.map((platform) => (
              <Pressable
                key={platform.id}
                style={[
                  styles.platformCard,
                  selectedPlatforms.includes(platform.id) && styles.platformCardSelected,
                ]}
                onPress={() => handlePlatformToggle(platform.id)}
              >
                <View style={[styles.platformIcon, { backgroundColor: platform.color }]}>
                  <Ionicons name={platform.icon} size={24} color="white" />
                </View>
                <Text style={styles.platformName}>{platform.name}</Text>
                <Text style={styles.platformAudience}>{platform.audience}</Text>
                
                {selectedPlatforms.includes(platform.id) && (
                  <View style={styles.selectedBadge}>
                    <Ionicons name="checkmark-circle" size={20} color="#10b981" />
                  </View>
                )}
              </Pressable>
            ))}
          </View>
        </View>

        {/* Media Upload */}
        <View style={styles.mediaSection}>
          <Text style={styles.sectionTitle}>Add Media</Text>
          <View style={styles.mediaButtons}>
            <Pressable style={styles.mediaButton}>
              <Ionicons name="image-outline" size={24} color="#6366f1" />
              <Text style={styles.mediaButtonText}>Photo</Text>
            </Pressable>
            <Pressable style={styles.mediaButton}>
              <Ionicons name="videocam-outline" size={24} color="#6366f1" />
              <Text style={styles.mediaButtonText}>Video</Text>
            </Pressable>
            <Pressable style={styles.mediaButton}>
              <Ionicons name="link-outline" size={24} color="#6366f1" />
              <Text style={styles.mediaButtonText}>Link</Text>
            </Pressable>
          </View>
        </View>

        {/* Schedule Options */}
        <View style={styles.scheduleSection}>
          <Text style={styles.sectionTitle}>When to Post</Text>
          <View style={styles.scheduleButtons}>
            <Pressable style={styles.scheduleButton}>
              <Ionicons name="flash" size={20} color="#f59e0b" />
              <Text style={styles.scheduleButtonText}>Post Now</Text>
            </Pressable>
            <Pressable style={styles.scheduleButton}>
              <Ionicons name="time" size={20} color="#6366f1" />
              <Text style={styles.scheduleButtonText}>Schedule</Text>
            </Pressable>
            <Pressable style={styles.scheduleButton}>
              <Ionicons name="sparkles" size={20} color="#ec4899" />
              <Text style={styles.scheduleButtonText}>Best Time (AI)</Text>
            </Pressable>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <Pressable style={styles.draftButton}>
            <Text style={styles.draftButtonText}>Save Draft</Text>
          </Pressable>
          
          <Pressable style={styles.publishButton} onPress={handleSchedulePost}>
            <LinearGradient
              colors={['#6366f1', '#8b5cf6']}
              style={styles.publishGradient}
            >
              <Text style={styles.publishButtonText}>Schedule Post</Text>
              <Ionicons name="send" size={18} color="white" />
            </LinearGradient>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const aiSuggestions = [
  {
    icon: 'trending-up' as const,
    title: 'Trending Topic',
    preview: 'AI revolution in social media...',
    content: '🚀 The AI revolution in social media is here! From automated content creation to smart scheduling, artificial intelligence is transforming how we connect and engage online. What AI tools are you using in your content strategy? #AI #SocialMedia #Innovation',
    gradient: ['#6366f1', '#8b5cf6'],
  },
  {
    icon: 'bulb-outline' as const,
    title: 'Tips & Advice',
    preview: '5 tips for better engagement...',
    content: '💡 5 proven tips to boost your social media engagement:\n\n1. Post consistently at optimal times\n2. Use relevant hashtags strategically\n3. Engage with your audience authentically\n4. Share valuable, actionable content\n5. Leverage user-generated content\n\nWhich tip will you try first? #SocialMediaTips #Engagement',
    gradient: ['#10b981', '#059669'],
  },
  {
    icon: 'heart' as const,
    title: 'Motivational',
    preview: 'Monday motivation...',
    content: '✨ Monday Motivation: Your unique voice and perspective matter in this digital world. Every post you share has the potential to inspire, educate, or connect with someone who needs to hear it. Keep creating, keep sharing, keep growing! 💪 #MondayMotivation #CreateDaily #Inspiration',
    gradient: ['#ec4899', '#f97316'],
  },
];

const platforms = [
  {
    id: 'instagram',
    name: 'Instagram',
    icon: 'logo-instagram' as const,
    color: '#e4405f',
    audience: '2.5K followers',
  },
  {
    id: 'twitter',
    name: 'Twitter',
    icon: 'logo-twitter' as const,
    color: '#1da1f2',
    audience: '1.8K followers',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: 'logo-linkedin' as const,
    color: '#0077b5',
    audience: '892 connections',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    icon: 'logo-facebook' as const,
    color: '#1877f2',
    audience: '3.2K friends',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    icon: 'logo-tiktok' as const,
    color: '#000000',
    audience: '1.2K followers',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    icon: 'logo-youtube' as const,
    color: '#ff0000',
    audience: '567 subscribers',
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
    aiButton: {
      borderRadius: 12,
      overflow: 'hidden',
    },
    aiButtonGradient: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    aiButtonText: {
      fontSize: 14,
      fontWeight: '600',
      color: 'white',
      marginLeft: 6,
    },
    contentSection: {
      paddingHorizontal: 24,
      paddingVertical: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: isDark ? '#ffffff' : '#1f2937',
      marginBottom: 16,
    },
    textInputContainer: {
      position: 'relative',
      backgroundColor: isDark ? '#1a1a2e' : '#ffffff',
      borderRadius: 16,
      borderWidth: 2,
      borderColor: isDark ? '#374151' : '#e5e7eb',
      overflow: 'hidden',
    },
    textInput: {
      padding: 16,
      fontSize: 16,
      color: isDark ? '#ffffff' : '#1f2937',
      minHeight: 120,
      maxHeight: 200,
    },
    generatingOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    generatingGradient: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isDark ? 'rgba(26,26,46,0.9)' : 'rgba(255,255,255,0.9)',
    },
    generatingText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#6366f1',
      marginTop: 8,
    },
    characterCount: {
      alignItems: 'flex-end',
      marginTop: 8,
    },
    characterText: {
      fontSize: 12,
      color: isDark ? '#9ca3af' : '#6b7280',
    },
    suggestionsSection: {
      paddingLeft: 24,
      marginBottom: 24,
    },
    suggestionCard: {
      width: 200,
      backgroundColor: isDark ? '#1a1a2e' : '#ffffff',
      borderRadius: 16,
      padding: 16,
      marginRight: 12,
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
      marginBottom: 12,
    },
    suggestionTitle: {
      fontSize: 14,
      fontWeight: '600',
      color: isDark ? '#ffffff' : '#1f2937',
      marginBottom: 4,
    },
    suggestionText: {
      fontSize: 12,
      color: isDark ? '#9ca3af' : '#6b7280',
      lineHeight: 16,
    },
    platformSection: {
      paddingHorizontal: 24,
      marginBottom: 24,
    },
    platformGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    platformCard: {
      width: (width - 72) / 2,
      backgroundColor: isDark ? '#1a1a2e' : '#ffffff',
      borderRadius: 16,
      padding: 16,
      marginBottom: 12,
      alignItems: 'center',
      position: 'relative',
      borderWidth: 2,
      borderColor: 'transparent',
      shadowColor: isDark ? '#000000' : '#1f2937',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: isDark ? 0.3 : 0.1,
      shadowRadius: 8,
    },
    platformCardSelected: {
      borderColor: '#10b981',
      backgroundColor: isDark ? 'rgba(16,185,129,0.1)' : 'rgba(16,185,129,0.05)',
    },
    platformIcon: {
      width: 48,
      height: 48,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 12,
    },
    platformName: {
      fontSize: 14,
      fontWeight: '600',
      color: isDark ? '#ffffff' : '#1f2937',
      marginBottom: 4,
    },
    platformAudience: {
      fontSize: 12,
      color: isDark ? '#9ca3af' : '#6b7280',
    },
    selectedBadge: {
      position: 'absolute',
      top: 12,
      right: 12,
    },
    mediaSection: {
      paddingHorizontal: 24,
      marginBottom: 24,
    },
    mediaButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    mediaButton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: isDark ? '#1a1a2e' : '#ffffff',
      borderRadius: 16,
      paddingVertical: 20,
      marginHorizontal: 4,
      borderWidth: 2,
      borderColor: isDark ? '#374151' : '#e5e7eb',
    },
    mediaButtonText: {
      fontSize: 12,
      fontWeight: '600',
      color: '#6366f1',
      marginTop: 8,
    },
    scheduleSection: {
      paddingHorizontal: 24,
      marginBottom: 32,
    },
    scheduleButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    scheduleButton: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: isDark ? '#1a1a2e' : '#ffffff',
      borderRadius: 16,
      paddingVertical: 16,
      marginHorizontal: 4,
      borderWidth: 2,
      borderColor: isDark ? '#374151' : '#e5e7eb',
    },
    scheduleButtonText: {
      fontSize: 12,
      fontWeight: '600',
      color: isDark ? '#e5e7eb' : '#374151',
      marginLeft: 6,
    },
    actionButtons: {
      flexDirection: 'row',
      paddingHorizontal: 24,
      gap: 12,
    },
    draftButton: {
      flex: 1,
      backgroundColor: isDark ? '#374151' : '#f3f4f6',
      borderRadius: 16,
      paddingVertical: 16,
      alignItems: 'center',
      justifyContent: 'center',
    },
    draftButtonText: {
      fontSize: 16,
      fontWeight: '600',
      color: isDark ? '#9ca3af' : '#6b7280',
    },
    publishButton: {
      flex: 2,
      borderRadius: 16,
      overflow: 'hidden',
    },
    publishGradient: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 16,
      paddingHorizontal: 24,
    },
    publishButtonText: {
      fontSize: 16,
      fontWeight: '600',
      color: 'white',
      marginRight: 8,
    },
  });
}