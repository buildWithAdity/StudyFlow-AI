import { View, StyleSheet } from "react-native";

import AppText from "../common/AppText";
import { Colors } from "../../theme/colors";

interface TaskCardProps {
  title: string;
  priority: string;
  completed: boolean;
}

export default function TaskCard({
  title,
  priority,
  completed,
}: TaskCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View
          style={[
            styles.status,
            {
              backgroundColor: completed
                ? Colors.success
                : Colors.border,
            },
          ]}
        />

        <View style={{ flex: 1 }}>
          <AppText variant="body">{title}</AppText>

          <AppText variant="caption" style={styles.priority}>
            Priority: {priority}
          </AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: Colors.border,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  status: {
    width: 18,
    height: 18,
    borderRadius: 9,
    marginRight: 14,
  },

  priority: {
    color: Colors.textLight,
    marginTop: 4,
  },
});