import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { ScreenLayout } from "../components/ScreenLayout";
import { colors } from "../theme/colors";

export function SocialScreen() {
  return (
    <ScreenLayout>
      <View style={styles.center}>
        <Text style={styles.title}>🌟 食光动态</Text>
        <Text style={styles.subtitle}>分享健康餐 / 好友互动</Text>
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.textPrimary,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
  },
});
