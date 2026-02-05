import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScreenLayout } from "../components/ScreenLayout";
import { colors } from "../theme/colors";

export function ProfileScreen() {
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <Text style={styles.title}>👤 我的</Text>
        <Text style={styles.subtitle}>个人设置与宠物</Text>
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.textPrimary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
  },
});
