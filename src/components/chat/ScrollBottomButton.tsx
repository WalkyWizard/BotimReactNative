import { Image } from 'expo-image';
import { Pressable, StyleSheet } from 'react-native';

const CIRCLE_ARROW_DOWN = require('@/assets/images/circle-arrow-down.svg');

interface ScrollBottomButtonProps {
  visible: boolean;
  onPress?: () => void;
}

export function ScrollBottomButton({ visible, onPress }: ScrollBottomButtonProps) {
  if (!visible) {
    return null;
  }

  return (
    <Pressable style={styles.floatingButton} onPress={onPress}>
      <Image
        source={CIRCLE_ARROW_DOWN}
        style={styles.icon}
        contentFit="contain"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    right: 18,
    bottom: 12,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
    zIndex: 10,
  },
  icon: {
    width: 36,
    height: 36,
  },
});
