import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScreenLayout } from "../components/ScreenLayout";
import { colors } from "../theme/colors";

export function DataScreen() {
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <Text style={styles.title}>📊 健康数据</Text>
        <Text style={styles.subtitle}>你的身体管理中心</Text>
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
