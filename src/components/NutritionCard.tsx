import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

interface NutrientProps {
  label: string;
  value: string;
  percent: number;
  color: string;
}

interface NutritionCardProps {
  foodName: string;
  calories: number;
  healthScore: number; // 1-10
  nutrients: {
    protein: number;
    carbs: number;
    fat: number;
  };
  onClose?: () => void;
}

const NutrientBar = ({ label, value, percent, color }: NutrientProps) => (
  <View style={styles.nutrientRow}>
    <View style={styles.nutrientInfo}>
      <Text style={styles.nutrientLabel}>{label}</Text>
      <Text style={styles.nutrientValue}>{value}</Text>
    </View>
    <View style={styles.progressBarBg}>
      <View
        style={[
          styles.progressBarFill,
          { width: `${percent}%`, backgroundColor: color },
        ]}
      />
    </View>
  </View>
);

export function NutritionCard({
  foodName,
  calories,
  healthScore,
  nutrients,
}: NutritionCardProps) {
  const getHealthColor = (score: number) => {
    if (score >= 8) return colors.success;
    if (score >= 5) return colors.warning;
    return colors.danger;
  };

  const getHealthLabel = (score: number) => {
    if (score >= 8) return "健康绿灯";
    if (score >= 5) return "适量黄灯";
    return "高热红灯";
  };

  const totalNutrients =
    nutrients.protein + nutrients.carbs + nutrients.fat || 1;

  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.foodName}>{foodName}</Text>
          <View style={styles.badgeContainer}>
            <View
              style={[
                styles.badgeDot,
                { backgroundColor: getHealthColor(healthScore) },
              ]}
            />
            <Text
              style={[
                styles.badgeText,
                { color: getHealthColor(healthScore) },
              ]}
            >
              {getHealthLabel(healthScore)}
            </Text>
          </View>
        </View>
        <View style={styles.caloriesContainer}>
          <Text style={styles.caloriesValue}>{calories}</Text>
          <Text style={styles.caloriesUnit}>kcal</Text>
        </View>
      </View>

      <View style={styles.divider} />

      {/* Nutrients */}
      <View style={styles.nutrientsContainer}>
        <NutrientBar
          label="蛋白质"
          value={`${nutrients.protein}g`}
          percent={(nutrients.protein / totalNutrients) * 100}
          color={colors.accentGreen}
        />
        <NutrientBar
          label="碳水"
          value={`${nutrients.carbs}g`}
          percent={(nutrients.carbs / totalNutrients) * 100}
          color={colors.accentOrange}
        />
        <NutrientBar
          label="脂肪"
          value={`${nutrients.fat}g`}
          percent={(nutrients.fat / totalNutrients) * 100}
          color={colors.accentPurple}
        />
      </View>

      {/* AI Comment */}
      <View style={styles.aiComment}>
        <Ionicons name="sparkles" size={16} color={colors.accentOrange} />
        <Text style={styles.aiText}>
          AI 建议：蛋白质含量不错，建议搭配一杯黑咖啡更燃脂哦！
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(30, 30, 30, 0.95)",
    borderRadius: 24,
    padding: spacing.lg,
    width: Dimensions.get("window").width - spacing.lg * 2,
    borderWidth: 1,
    borderColor: colors.surfaceStrong,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: spacing.md,
  },
  foodName: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.textPrimary,
    marginBottom: 4,
  },
  badgeContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  badgeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "600",
  },
  caloriesContainer: {
    alignItems: "flex-end",
  },
  caloriesValue: {
    fontSize: 32,
    fontWeight: "800",
    color: colors.textPrimary,
    lineHeight: 36,
  },
  caloriesUnit: {
    fontSize: 14,
    color: colors.textMuted,
    fontWeight: "600",
  },
  divider: {
    height: 1,
    backgroundColor: colors.surfaceStrong,
    marginVertical: spacing.md,
  },
  nutrientsContainer: {
    gap: spacing.md,
  },
  nutrientRow: {
    marginBottom: 4,
  },
  nutrientInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  nutrientLabel: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  nutrientValue: {
    fontSize: 14,
    color: colors.textPrimary,
    fontWeight: "600",
  },
  progressBarBg: {
    height: 6,
    backgroundColor: colors.surface,
    borderRadius: 3,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    borderRadius: 3,
  },
  aiComment: {
    marginTop: spacing.lg,
    backgroundColor: "rgba(255, 122, 26, 0.1)",
    padding: spacing.md,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  aiText: {
    flex: 1,
    fontSize: 13,
    color: colors.accentOrange,
    lineHeight: 18,
  },
});
