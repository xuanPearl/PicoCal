import React from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import { ScreenLayout } from "../components/ScreenLayout";
import { PostCard } from "../components/PostCard";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

const MOCK_POSTS = [
  {
    id: "1",
    user: { name: "Alice", avatar: "A" },
    image: "url1",
    caption: "今天的健康午餐，牛油果简直是神仙！🥑",
    calories: 450,
    likes: 24,
    timeAgo: "2h ago",
  },
  {
    id: "2",
    user: { name: "Bob_Fit", avatar: "B" },
    image: "url2",
    caption: "练完腿必须来顿狠的，碳水拉满！💪",
    calories: 820,
    likes: 108,
    timeAgo: "5h ago",
  },
  {
    id: "3",
    user: { name: "Cathy", avatar: "C" },
    image: "url3",
    caption: "欺骗餐日！但是只吃了一半哦 😉",
    calories: 600,
    likes: 45,
    timeAgo: "1d ago",
  },
];

export function SocialScreen() {
  return (
    <ScreenLayout>
      <View style={styles.header}>
        <Text style={styles.title}>The Vibe</Text>
      </View>
      <FlatList
        data={MOCK_POSTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard {...item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: spacing.md,
    marginBottom: spacing.sm,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  listContent: {
    paddingBottom: 20,
  },
});
