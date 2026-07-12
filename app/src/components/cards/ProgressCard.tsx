import { View, StyleSheet } from "react-native";

import AppText from "../common/AppText";
import { Colors } from "../../theme/colors";

interface ProgressCardProps {
  completed: number;
  total: number;
}

export default function ProgressCard({
  completed,
  total,
}: ProgressCardProps) {
  const percentage = (completed / total) * 100;

  return (
    <View style={styles.card}>
      <AppText variant="title">Today's Progress</AppText>

      <AppText variant="h2" style={styles.progressText}>
        {completed} / {total} Tasks
      </AppText>

      <AppText variant="caption" style={styles.caption}>
        Keep going! You're doing great.
      </AppText>

      <View style={styles.progressBar}>
        <View
          style={[
            styles.progressFill,
            {
              width: `${percentage}%`,
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.cardBlue,
    padding: 20,
    borderRadius: 18,
    marginBottom: 24,
  },

  progressText: {
    color: Colors.primary,
    marginTop: 10,
  },

  caption: {
    color: Colors.textLight,
    marginTop: 4,
  },

  progressBar: {
    marginTop: 16,
    width: "100%",
    height: 10,
    backgroundColor: Colors.border,
    borderRadius: 20,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: Colors.primary,
  },
});