import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

import { BannerType } from '@/types/chat';

interface ChatCardProps {
  bannerType: BannerType;
  title: string;
  description: string;
}

const FREE_CALLS_BANNER = require('@/assets/images/Wifi.webp');
const VIP_TRIAL_BANNER = require('@/assets/images/FreeTrial.webp');

export function ChatCard({ bannerType, title, description }: ChatCardProps) {
  const bannerSource = bannerType === 'free_calls' ? FREE_CALLS_BANNER : VIP_TRIAL_BANNER;

  return (
    <View style={styles.card}>
      <Image
        source={bannerSource}
        style={styles.bannerImage}
        contentFit="cover"
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#F3F4FB',
    borderWidth: 1,
    borderColor: '#ECEEF6',
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  bannerImage: {
    width: '100%',
    aspectRatio: 2,
  },
  infoContainer: {
    paddingHorizontal: 14,
    paddingTop: 10,
    paddingBottom: 12,
  },
  title: {
    fontSize: 15.5,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
    letterSpacing: -0.2,
  },
  description: {
    fontSize: 12.5,
    fontWeight: '400',
    color: '#6B7280',
    lineHeight: 17,
  },
});
