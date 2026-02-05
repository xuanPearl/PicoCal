import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

interface PostCardProps {
  user: {
    name: string;
    avatar: string;
  };
  image: string;
  caption: string;
  calories: number;
  likes: number;
  timeAgo: string;
}

const { width } = Dimensions.get("window");

export function PostCard({ user, image, caption, calories, likes, timeAgo }: PostCardProps) {
  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <View style={styles.avatarPlaceholder}>
             <Text style={styles.avatarText}>{user.name[0]}</Text>
          </View>
          <View>
            <Text style={styles.username}>{user.name}</Text>
            <Text style={styles.timeAgo}>{timeAgo}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={20} color={colors.textSecondary} />
        </TouchableOpacity>
      </View>

      {/* Image */}
      <View style={styles.imageContainer}>
        {/* Using a colored placeholder if image is a mock URL, 
            in a real app this would be <Image source={{ uri: image }} ... /> 
        */}
        <View style={[styles.image, { backgroundColor: '#2A2E35' }]}>
             <Ionicons name="image-outline" size={64} color={colors.surfaceStrong} />
        </View>
        
        {/* Calorie Badge Overlay */}
        <View style={styles.calorieBadge}>
          <Ionicons name="flame" size={12} color={colors.accentOrange} />
          <Text style={styles.calorieText}>{calories} kcal</Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.actions}>
          <View style={styles.actionLeft}>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="heart-outline" size={26} color={colors.textPrimary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="chatbubble-outline" size={24} color={colors.textPrimary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="paper-plane-outline" size={24} color={colors.textPrimary} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
             <Ionicons name="bookmark-outline" size={24} color={colors.textPrimary} />
          </TouchableOpacity>
        </View>

        <Text style={styles.likes}>{likes} likes</Text>
        
        <View style={styles.captionContainer}>
          <Text style={styles.usernameSmall}>{user.name}</Text>
          <Text style={styles.caption}>{caption}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: spacing.xl,
    borderBottomWidth: 1,
    borderBottomColor: colors.surface,
    paddingBottom: spacing.md,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.md,
    marginBottom: spacing.sm,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  avatarPlaceholder: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.surfaceStrong,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: colors.textPrimary,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.textPrimary,
  },
  timeAgo: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  imageContainer: {
    position: 'relative',
    width: width,
    height: width, // Square image
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  calorieBadge: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    backgroundColor: "rgba(0,0,0,0.7)",
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  calorieText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
  footer: {
    paddingHorizontal: spacing.md,
    marginTop: spacing.sm,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  actionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  iconBtn: {
    padding: 4,
  },
  likes: {
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 4,
  },
  captionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  usernameSmall: {
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginRight: 6,
  },
  caption: {
    color: colors.textPrimary,
  },
});
