import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

interface CalorieRingProps {
  consumed: number;
  total: number;
}

export function CalorieRing({ consumed, total }: CalorieRingProps) {
  const remaining = total - consumed;
  const percent = Math.min(consumed / total, 1);
  const isOver = remaining < 0;

  return (
    <View style={styles.ringContainer}>
      <View style={styles.ringOuter}>
        {/* Simple visual representation of a ring using borders for now */}
        <View style={styles.ringInner}>
          <Text style={styles.ringLabel}>剩余</Text>
          <Text style={[styles.ringValue, isOver && styles.textDanger]}>
            {Math.abs(remaining)}
          </Text>
          <Text style={styles.ringUnit}>kcal</Text>
        </View>
      </View>
      <View style={styles.summaryRow}>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>已摄入</Text>
          <Text style={styles.summaryValue}>{consumed}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>目标</Text>
          <Text style={styles.summaryValue}>{total}</Text>
        </View>
      </View>
    </View>
  );
}

export function DailyStats() {
  return (
    <View style={styles.statsContainer}>
      <StatItem
        label="碳水"
        value="120/200g"
        color={colors.accentOrange}
        percent={0.6}
      />
      <StatItem
        label="蛋白质"
        value="85/140g"
        color={colors.accentGreen}
        percent={0.65}
      />
      <StatItem
        label="脂肪"
        value="40/60g"
        color={colors.accentPurple}
        percent={0.66}
      />
    </View>
  );
}

function StatItem({
  label,
  value,
  color,
  percent,
}: {
  label: string;
  value: string;
  color: string;
  percent: number;
}) {
  return (
    <View style={styles.statItem}>
      <View style={styles.statHeader}>
        <Text style={styles.statLabel}>{label}</Text>
        <Text style={styles.statValue}>{value}</Text>
      </View>
      <View style={styles.progressBg}>
        <View
          style={[
            styles.progressFill,
            { backgroundColor: color, width: `${percent * 100}%` },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ringContainer: {
    alignItems: "center",
    marginVertical: spacing.lg,
  },
  ringOuter: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 15,
    borderColor: colors.surface,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing.lg,
    // Note: For a real app, use SVG or distinct arcs for progress
    borderTopColor: colors.accentOrange,
    borderRightColor: colors.accentOrange,
  },
  ringInner: {
    alignItems: "center",
  },
  ringLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  ringValue: {
    fontSize: 48,
    fontWeight: "bold",
    color: colors.textPrimary,
    lineHeight: 56,
  },
  ringUnit: {
    fontSize: 16,
    color: colors.textMuted,
    fontWeight: "600",
  },
  textDanger: {
    color: colors.danger,
  },
  summaryRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xl,
  },
  summaryItem: {
    alignItems: "center",
  },
  summaryLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 2,
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  divider: {
    width: 1,
    height: 24,
    backgroundColor: colors.surfaceStrong,
  },
  statsContainer: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: spacing.md,
    gap: spacing.md,
  },
  statItem: {
    gap: 6,
  },
  statHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statLabel: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  statValue: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.textPrimary,
  },
  progressBg: {
    height: 6,
    backgroundColor: colors.surfaceStrong,
    borderRadius: 3,
  },
  progressFill: {
    height: "100%",
    borderRadius: 3,
  },
});
