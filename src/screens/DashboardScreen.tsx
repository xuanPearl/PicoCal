import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { ScreenLayout } from "../components/ScreenLayout";
import { CalorieRing, DailyStats } from "../components/DashboardWidgets";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

export function DashboardScreen() {
  return (
    <ScreenLayout>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <Text style={styles.greeting}>Good Morning,</Text>
          <Text style={styles.username}>Pearl</Text>
        </View>

        <CalorieRing consumed={1240} total={2000} />

        <Text style={styles.sectionTitle}>今日营养</Text>
        <DailyStats />

        {/* Placeholder for future hydration/weight modules */}
        <View style={{ height: 20 }} />
      </ScrollView>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 80,
  },
  header: {
    marginBottom: spacing.md,
  },
  greeting: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  username: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.textPrimary,
    marginTop: spacing.xl,
    marginBottom: spacing.md,
  },
});
