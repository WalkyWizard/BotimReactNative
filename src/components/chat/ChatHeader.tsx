import { Image } from 'expo-image';
import { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BACK_ICON = require('@/assets/images/arrow-back.svg');
const BOTIM_LOGO = require('@/assets/images/logo.png');
const CHECK_MARK = require('@/assets/images/check-mark.svg');
const ACCOUNT_ICON = require('@/assets/images/account.svg');

export const ChatHeader = memo(function ChatHeader() {
  return (
    <View style={styles.header}>
      <View style={styles.squareButton}>
        <Image source={BACK_ICON} style={styles.backIcon} contentFit="contain" />
      </View>

      <View style={styles.centerContainer}>
        <Image source={BOTIM_LOGO} style={styles.avatar} contentFit="cover" />
        <View style={styles.titleColumn}>
          <View style={styles.nameRow}>
            <Text style={styles.nameText}>botim</Text>
            <Image source={CHECK_MARK} style={styles.checkIcon} contentFit="contain" />
          </View>
          <Text style={styles.subText}>Official account</Text>
        </View>
      </View>

      <View style={styles.squareButton}>
        <Image source={ACCOUNT_ICON} style={styles.accountIcon} contentFit="contain" />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 6,
    paddingBottom: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E5E7EB',
  },
  squareButton: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: '#ECECF0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  centerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 12,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 10,
  },
  titleColumn: {
    justifyContent: 'center',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  nameText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  checkIcon: {
    width: 17,
    height: 17,
  },
  subText: {
    fontSize: 12,
    color: '#717684',
    marginTop: 1,
  },
  accountIcon: {
    width: 22,
    height: 22,
  },
});
