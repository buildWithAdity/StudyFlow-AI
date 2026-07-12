import { View, StyleSheet } from "react-native";

import AppText from "../common/AppText";
import { Colors } from "../../theme/colors";

interface StatCardProps {
  title: string;
  value: string;
}

export default function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <View style={styles.card}>
      <AppText variant="caption" style={styles.title}>
        {title}
      </AppText>

      <AppText variant="h2" style={styles.value}>
        {value}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: Colors.border,
    marginHorizontal: 4,
  },

  title: {
    color: Colors.textLight,
    marginBottom: 8,
  },

  value: {
    color: Colors.primary,
  },
});