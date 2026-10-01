import { StyleSheet, Text, View } from 'react-native';

interface DateBadgeProps {
  date: string;
}

export function DateBadge({ date }: DateBadgeProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E5EE',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 3.5,
    marginVertical: 14,
    shadowColor: '#000000',
    shadowOpacity: 0.03,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 1,
  },
  text: {
    fontSize: 11,
    fontWeight: '500',
    color: '#4B5563',
    letterSpacing: 0.2,
  },
});
