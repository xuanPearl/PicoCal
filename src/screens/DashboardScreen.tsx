import React from "react";
import { Text, StyleSheet } from "react-native";
import { ScreenLayout } from "../components/ScreenLayout";
import { colors } from "../theme/colors";

export function DashboardScreen() {
  return (
    <ScreenLayout>
      <Text style={styles.title}>The Brain</Text>
      <Text style={styles.subtitle}>身体数据与饮食建议</Text>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.textPrimary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
  },
});
