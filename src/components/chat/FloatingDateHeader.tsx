import { StyleSheet, Text, View } from 'react-native';

interface FloatingDateHeaderProps {
  date: string;
  visible: boolean;
}

export function FloatingDateHeader({ date, visible }: FloatingDateHeaderProps) {
  if (!visible || !date) {
    return null;
  }

  return (
    <View style={styles.floatingContainer} pointerEvents="none">
      <View style={styles.badge}>
        <Text style={styles.text}>{date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  floatingContainer: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 20,
  },
  badge: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E5EE',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 3.5,
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 3,
  },
  text: {
    fontSize: 11,
    fontWeight: '500',
    color: '#4B5563',
    letterSpacing: 0.2,
  },
});
