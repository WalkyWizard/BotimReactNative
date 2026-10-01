import { useCallback, useRef, useState } from 'react';
import { FlatList, StyleSheet, View, ViewToken } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ChatCard } from '@/components/chat/ChatCard';
import { ChatHeader } from '@/components/chat/ChatHeader';
import { ChatInputBar } from '@/components/chat/ChatInputBar';
import { DateBadge } from '@/components/chat/DateBadge';
import { FloatingDateHeader } from '@/components/chat/FloatingDateHeader';
import { ScrollBottomButton } from '@/components/chat/ScrollBottomButton';
import { CHAT_MESSAGES } from '@/data/chat-messages';
import { ChatMessage } from '@/types/chat';

export function ChatScreen() {
  const flatListRef = useRef<FlatList<ChatMessage>>(null);
  const lastScrollY = useRef(0);
  const isAtTop = useSharedValue(true);
  const translateY = useSharedValue(0);

  const [currentDate, setCurrentDate] = useState<string>(CHAT_MESSAGES[0].date);
  const [scrolledUp, setScrolledUp] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(false);
  const [initialScrolled, setInitialScrolled] = useState(false);

  const panGesture = Gesture.Pan()
    .activeOffsetY([15, 9999])
    .onUpdate((e) => {
      'worklet';
      if (isAtTop.value && e.translationY > 0) {
        translateY.value = Math.pow(e.translationY, 0.72) * 1.6;
      }
    })
    .onFinalize(() => {
      'worklet';
      translateY.value = withSpring(0, {
        damping: 18,
        stiffness: 200,
        mass: 0.9,
      });
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const handleScroll = useCallback((event: any) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    const y: number = contentOffset.y;
    const distanceFromBottom = contentSize.height - (y + layoutMeasurement.height);

    isAtTop.value = y <= 4;

    const away = distanceFromBottom > 70;
    if (away !== scrolledUp) setScrolledUp(away);

    const goingUp = y < lastScrollY.current - 3;
    lastScrollY.current = y;

    if (goingUp && away) {
      setScrollingUp(true);
    } else if (!goingUp) {
      setScrollingUp(false);
    }
  }, [scrolledUp, isAtTop]);

  const handleViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken<ChatMessage>[] }) => {
      if (viewableItems.length > 0 && viewableItems[0].item) {
        setCurrentDate(viewableItems[0].item.date);
      }
    },
    []
  );

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 10,
  }).current;

  const renderItem = useCallback(({ item }: { item: ChatMessage }) => (
    <View style={styles.messageGroup}>
      <DateBadge date={item.date} />
      <ChatCard
        bannerType={item.bannerType}
        title={item.title}
        description={item.description}
      />
    </View>
  ), []);

  const handleContentSizeChange = useCallback(() => {
    if (!initialScrolled && flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: false });
      setInitialScrolled(true);
    }
  }, [initialScrolled]);

  const scrollToBottom = useCallback(() => {
    flatListRef.current?.scrollToEnd({ animated: true });
  }, []);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ChatHeader />

      <View style={styles.chatArea}>
        <FloatingDateHeader date={currentDate} visible={scrolledUp && scrollingUp} />

        <GestureDetector gesture={panGesture}>
          <Animated.View style={[styles.animatedList, animatedStyle]}>
            <FlatList
              ref={flatListRef}
              data={CHAT_MESSAGES}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
              onScroll={handleScroll}
              scrollEventThrottle={16}
              onViewableItemsChanged={handleViewableItemsChanged}
              viewabilityConfig={viewabilityConfig}
              onContentSizeChange={handleContentSizeChange}
              contentContainerStyle={styles.listContent}
              bounces={false}
              overScrollMode="never"
              showsVerticalScrollIndicator={false}
            />
          </Animated.View>
        </GestureDetector>

        <ScrollBottomButton visible={scrolledUp} onPress={scrollToBottom} />
      </View>

      <ChatInputBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  chatArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  animatedList: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 20,
    paddingTop: 8,
  },
  messageGroup: {
    marginBottom: 10,
  },
});
