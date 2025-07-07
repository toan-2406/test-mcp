import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  useColorScheme,
  Switch,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const styles = createStyles(isDark);

  const [pushNotifications, setPushNotifications] = React.useState(true);
  const [emailNotifications, setEmailNotifications] = React.useState(false);
  const [autoSchedule, setAutoSchedule] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(isDark);

  function handleLogout() {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Logout', style: 'destructive' },
      ]
    );
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
          <View style={styles.profileSection}>
            <View style={styles.avatarContainer}>
              <LinearGradient
                colors={['#6366f1', '#8b5cf6', '#ec4899']}
                style={styles.avatar}
              >
                <Text style={styles.avatarText}>AJ</Text>
              </LinearGradient>
              <Pressable style={styles.editAvatarButton}>
                <Ionicons name="camera" size={16} color="white" />
              </Pressable>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.userName}>Alex Johnson</Text>
              <Text style={styles.userEmail}>alex.johnson@example.com</Text>
              <View style={styles.planBadge}>
                <Ionicons name="star" size={12} color="#f59e0b" />
                <Text style={styles.planText}>Pro Plan</Text>
              </View>
            </View>
          </View>
          <Pressable style={styles.editProfileButton}>
            <Ionicons name="create-outline" size={20} color="#6366f1" />
          </Pressable>
        </View>

        {/* Stats Overview */}
        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Your Performance</Text>
          <View style={styles.statsGrid}>
            {profileStats.map((stat, index) => (
              <View key={index} style={styles.statCard}>
                <LinearGradient
                  colors={stat.gradient}
                  style={styles.statIcon}
                >
                  <Ionicons name={stat.icon} size={18} color="white" />
                </LinearGradient>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Account Settings */}
        <View style={styles.settingsSection}>
          <Text style={styles.sectionTitle}>Account</Text>
          
          {accountOptions.map((option, index) => (
            <Pressable key={index} style={styles.settingItem}>
              <View style={styles.settingIcon}>
                <Ionicons name={option.icon} size={20} color={option.color} />
              </View>
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>{option.title}</Text>
                <Text style={styles.settingDescription}>{option.description}</Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color={isDark ? '#9ca3af' : '#6b7280'} />
            </Pressable>
          ))}
        </View>

        {/* Preferences */}
        <View style={styles.preferencesSection}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          
          <View style={styles.settingItem}>
            <View style={styles.settingIcon}>
              <Ionicons name="notifications-outline" size={20} color="#6366f1" />
            </View>
            <View style={styles.settingContent}>
              <Text style={styles.settingTitle}>Push Notifications</Text>
              <Text style={styles.settingDescription}>Get notified about post performance</Text>
            </View>
            <Switch
              value={pushNotifications}
              onValueChange={setPushNotifications}
              trackColor={{ false: isDark ? '#374151' : '#e5e7eb', true: '#6366f1' }}
              thumbColor={pushNotifications ? 'white' : '#9ca3af'}
            />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingIcon}>
              <Ionicons name="mail-outline" size={20} color="#10b981" />
            </View>
            <View style={styles.settingContent}>
              <Text style={styles.settingTitle}>Email Notifications</Text>
              <Text style={styles.settingDescription}>Weekly performance reports</Text>
            </View>
            <Switch
              value={emailNotifications}
              onValueChange={setEmailNotifications}
              trackColor={{ false: isDark ? '#374151' : '#e5e7eb', true: '#10b981' }}
              thumbColor={emailNotifications ? 'white' : '#9ca3af'}
            />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingIcon}>
              <Ionicons name="time-outline" size={20} color="#f59e0b" />
            </View>
            <View style={styles.settingContent}>
              <Text style={styles.settingTitle}>Auto Schedule</Text>
              <Text style={styles.settingDescription}>Let AI optimize posting times</Text>
            </View>
            <Switch
              value={autoSchedule}
              onValueChange={setAutoSchedule}
              trackColor={{ false: isDark ? '#374151' : '#e5e7eb', true: '#f59e0b' }}
              thumbColor={autoSchedule ? 'white' : '#9ca3af'}
            />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingIcon}>
              <Ionicons name="moon-outline" size={20} color="#8b5cf6" />
            </View>
            <View style={styles.settingContent}>
              <Text style={styles.settingTitle}>Dark Mode</Text>
              <Text style={styles.settingDescription}>Switch to dark theme</Text>
            </View>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: isDark ? '#374151' : '#e5e7eb', true: '#8b5cf6' }}
              thumbColor={darkMode ? 'white' : '#9ca3af'}
            />
          </View>
        </View>

        {/* Connected Accounts */}
        <View style={styles.connectedSection}>
          <Text style={styles.sectionTitle}>Connected Accounts</Text>
          
          {connectedAccounts.map((account, index) => (
            <View key={index} style={styles.accountItem}>
              <View style={[styles.accountIcon, { backgroundColor: account.color }]}>
                <Ionicons name={account.icon} size={20} color="white" />
              </View>
              <View style={styles.accountContent}>
                <Text style={styles.accountName}>{account.name}</Text>
                <Text style={styles.accountStatus}>
                  {account.connected ? 'Connected' : 'Not connected'}
                </Text>
              </View>
              <Pressable style={[
                styles.connectButton,
                account.connected && styles.disconnectButton
              ]}>
                <Text style={[
                  styles.connectButtonText,
                  account.connected && styles.disconnectButtonText
                ]}>
                  {account.connected ? 'Disconnect' : 'Connect'}
                </Text>
              </Pressable>
            </View>
          ))}
        </View>

        {/* Support & Help */}
        <View style={styles.supportSection}>
          <Text style={styles.sectionTitle}>Support & Help</Text>
          
          {supportOptions.map((option, index) => (
            <Pressable key={index} style={styles.settingItem}>
              <View style={styles.settingIcon}>
                <Ionicons name={option.icon} size={20} color={option.color} />
              </View>
              <View style={styles.settingContent}>
                <Text style={styles.settingTitle}>{option.title}</Text>
                <Text style={styles.settingDescription}>{option.description}</Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color={isDark ? '#9ca3af' : '#6b7280'} />
            </Pressable>
          ))}
        </View>

        {/* Logout Button */}
        <View style={styles.logoutSection}>
          <Pressable style={styles.logoutButton} onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={20} color="#ef4444" />
            <Text style={styles.logoutText}>Logout</Text>
          </Pressable>
        </View>

        {/* App Version */}
        <View style={styles.versionSection}>
          <Text style={styles.versionText}>SocialGenie AI v1.0.0</Text>
          <Text style={styles.versionSubtext}>Made with ❤️ for creators</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const profileStats = [
  {
    icon: 'document-text-outline' as const,
    value: '127',
    label: 'Posts',
    gradient: ['#6366f1', '#8b5cf6'],
  },
  {
    icon: 'people-outline' as const,
    value: '5.2K',
    label: 'Followers',
    gradient: ['#10b981', '#059669'],
  },
  {
    icon: 'heart-outline' as const,
    value: '18.4K',
    label: 'Likes',
    gradient: ['#ef4444', '#dc2626'],
  },
  {
    icon: 'trending-up-outline' as const,
    value: '4.8%',
    label: 'Growth',
    gradient: ['#f59e0b', '#d97706'],
  },
];

const accountOptions = [
  {
    icon: 'person-outline' as const,
    title: 'Personal Information',
    description: 'Update your profile details',
    color: '#6366f1',
  },
  {
    icon: 'card-outline' as const,
    title: 'Subscription',
    description: 'Manage your plan and billing',
    color: '#10b981',
  },
  {
    icon: 'shield-outline' as const,
    title: 'Privacy & Security',
    description: 'Control your privacy settings',
    color: '#f59e0b',
  },
  {
    icon: 'download-outline' as const,
    title: 'Data Export',
    description: 'Download your content and data',
    color: '#8b5cf6',
  },
];

const connectedAccounts = [
  {
    name: 'Instagram',
    icon: 'logo-instagram' as const,
    color: '#e4405f',
    connected: true,
  },
  {
    name: 'Twitter',
    icon: 'logo-twitter' as const,
    color: '#1da1f2',
    connected: true,
  },
  {
    name: 'LinkedIn',
    icon: 'logo-linkedin' as const,
    color: '#0077b5',
    connected: false,
  },
  {
    name: 'Facebook',
    icon: 'logo-facebook' as const,
    color: '#1877f2',
    connected: true,
  },
  {
    name: 'TikTok',
    icon: 'logo-tiktok' as const,
    color: '#000000',
    connected: false,
  },
];

const supportOptions = [
  {
    icon: 'help-circle-outline' as const,
    title: 'Help Center',
    description: 'Find answers to common questions',
    color: '#6366f1',
  },
  {
    icon: 'chatbubble-outline' as const,
    title: 'Contact Support',
    description: 'Get help from our team',
    color: '#10b981',
  },
  {
    icon: 'document-text-outline' as const,
    title: 'Terms of Service',
    description: 'Read our terms and conditions',
    color: '#6b7280',
  },
  {
    icon: 'shield-checkmark-outline' as const,
    title: 'Privacy Policy',
    description: 'Learn how we protect your data',
    color: '#6b7280',
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
    profileSection: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    avatarContainer: {
      position: 'relative',
      marginRight: 16,
    },
    avatar: {
      width: 64,
      height: 64,
      borderRadius: 32,
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatarText: {
      fontSize: 24,
      fontWeight: '700',
      color: 'white',
    },
    editAvatarButton: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: '#6366f1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    profileInfo: {
      flex: 1,
    },
    userName: {
      fontSize: 20,
      fontWeight: '700',
      color: isDark ? '#ffffff' : '#1f2937',
      marginBottom: 4,
    },
    userEmail: {
      fontSize: 14,
      color: isDark ? '#9ca3af' : '#6b7280',
      marginBottom: 8,
    },
    planBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: isDark ? 'rgba(245,158,11,0.2)' : 'rgba(245,158,11,0.1)',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 12,
      alignSelf: 'flex-start',
    },
    planText: {
      fontSize: 12,
      fontWeight: '600',
      color: '#f59e0b',
      marginLeft: 4,
    },
    editProfileButton: {
      padding: 8,
      backgroundColor: isDark ? '#374151' : '#f3f4f6',
      borderRadius: 8,
    },
    statsSection: {
      paddingHorizontal: 24,
      paddingVertical: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: isDark ? '#ffffff' : '#1f2937',
      marginBottom: 16,
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
      width: 32,
      height: 32,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 8,
    },
    statValue: {
      fontSize: 18,
      fontWeight: '700',
      color: isDark ? '#ffffff' : '#1f2937',
      marginBottom: 4,
    },
    statLabel: {
      fontSize: 12,
      color: isDark ? '#9ca3af' : '#6b7280',
      textAlign: 'center',
    },
    settingsSection: {
      paddingHorizontal: 24,
      marginBottom: 24,
    },
    preferencesSection: {
      paddingHorizontal: 24,
      marginBottom: 24,
    },
    settingItem: {
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
    settingIcon: {
      width: 40,
      height: 40,
      borderRadius: 10,
      backgroundColor: isDark ? '#374151' : '#f3f4f6',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 16,
    },
    settingContent: {
      flex: 1,
    },
    settingTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: isDark ? '#ffffff' : '#1f2937',
      marginBottom: 4,
    },
    settingDescription: {
      fontSize: 14,
      color: isDark ? '#9ca3af' : '#6b7280',
    },
    connectedSection: {
      paddingHorizontal: 24,
      marginBottom: 24,
    },
    accountItem: {
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
    accountIcon: {
      width: 40,
      height: 40,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 16,
    },
    accountContent: {
      flex: 1,
    },
    accountName: {
      fontSize: 16,
      fontWeight: '600',
      color: isDark ? '#ffffff' : '#1f2937',
      marginBottom: 4,
    },
    accountStatus: {
      fontSize: 14,
      color: isDark ? '#9ca3af' : '#6b7280',
    },
    connectButton: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      backgroundColor: '#6366f1',
      borderRadius: 8,
    },
    connectButtonText: {
      fontSize: 14,
      fontWeight: '600',
      color: 'white',
    },
    disconnectButton: {
      backgroundColor: isDark ? '#374151' : '#f3f4f6',
    },
    disconnectButtonText: {
      color: isDark ? '#9ca3af' : '#6b7280',
    },
    supportSection: {
      paddingHorizontal: 24,
      marginBottom: 24,
    },
    logoutSection: {
      paddingHorizontal: 24,
      marginBottom: 24,
    },
    logoutButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: isDark ? '#1a1a2e' : '#ffffff',
      borderRadius: 16,
      padding: 16,
      borderWidth: 1,
      borderColor: '#ef4444',
      shadowColor: isDark ? '#000000' : '#1f2937',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: isDark ? 0.3 : 0.1,
      shadowRadius: 8,
    },
    logoutText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#ef4444',
      marginLeft: 8,
    },
    versionSection: {
      alignItems: 'center',
      paddingHorizontal: 24,
      paddingVertical: 16,
    },
    versionText: {
      fontSize: 14,
      color: isDark ? '#9ca3af' : '#6b7280',
      marginBottom: 4,
    },
    versionSubtext: {
      fontSize: 12,
      color: isDark ? '#6b7280' : '#9ca3af',
    },
  });
}