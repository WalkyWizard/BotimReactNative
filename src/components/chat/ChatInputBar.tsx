import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const MENU_ICON = require('@/assets/images/menu.svg');
const PLUS_ICON = require('@/assets/images/plus.svg');
const EMOJI_ICON = require('@/assets/images/emoji.svg');
const CAMERA_ICON = require('@/assets/images/camera.svg');
const MIC_ICON = require('@/assets/images/microphone.svg');

export function ChatInputBar() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: Math.max(insets.bottom, 12) }]}>
      <View style={styles.circleButton}>
        <Image source={MENU_ICON} style={styles.iconMedium} contentFit="contain" />
      </View>

      <View style={styles.circleButton}>
        <Image source={PLUS_ICON} style={styles.iconSmall} contentFit="contain" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.placeholderText}>Message...</Text>
        <Image source={EMOJI_ICON} style={styles.iconMedium} contentFit="contain" />
      </View>

      <View style={styles.circleButton}>
        <Image source={CAMERA_ICON} style={styles.iconMedium} contentFit="contain" />
      </View>

      <View style={styles.circleButton}>
        <Image source={MIC_ICON} style={styles.iconMedium} contentFit="contain" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 8,
    gap: 7,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#E5E7EB',
  },
  circleButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#EEF0F8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 1,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#EEF0F8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  placeholderText: {
    fontSize: 15,
    color: '#6B7280',
    letterSpacing: -0.2,
  },
  iconSmall: {
    width: 17,
    height: 17,
  },
  iconMedium: {
    width: 21,
    height: 21,
  },
});
