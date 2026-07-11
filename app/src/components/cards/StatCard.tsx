import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppCard from "./AppCard";
import AppText from "../common/AppText";

import { Colors } from "../../theme/colors";
import { Spacing } from "../../theme/spacing";

interface Props {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  value: string;
}

export default function StatCard({
  icon,
  title,
  value,
}: Props) {
  return (
    <AppCard style={styles.card}>
      <Ionicons
        name={icon}
        size={28}
        color={Colors.primary}
      />

      <AppText variant="caption" style={styles.title}>
        {title}
      </AppText>

      <AppText variant="h2">
        {value}
      </AppText>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minHeight: 120,
    justifyContent: "space-between",
  },

  title: {
    marginTop: Spacing.sm,
    color: Colors.gray,
  },
});