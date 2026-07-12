import { ScrollView, StyleSheet, View } from "react-native";

import AppText from "../../components/common/AppText";
import { Colors } from "../../theme/colors";

const tasks = [
  {
    id: 1,
    title: "Study React Native",
    priority: "High",
    completed: false,
  },
  {
    id: 2,
    title: "Complete DAA Assignment",
    priority: "Medium",
    completed: true,
  },
  {
    id: 3,
    title: "Revise COA",
    priority: "Low",
    completed: false,
  },
];

export default function PlannerScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <AppText variant="h1">📚 Study Planner</AppText>

        <AppText
          variant="body"
          style={styles.subtitle}
        >
          Stay organized and achieve your daily goals.
        </AppText>
      </View>

      {/* Progress Card */}
      <View style={styles.progressCard}>
        <AppText variant="title">
          Today's Progress
        </AppText>

        <AppText
          variant="h2"
          style={styles.progressText}
        >
          3 / 8 Tasks
        </AppText>

        <AppText
          variant="caption"
          style={styles.progressCaption}
        >
          Keep going! You're doing great.
        </AppText>

        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>
      </View>

      {/* Tasks */}
      <AppText
        variant="title"
        style={styles.sectionTitle}
      >
        Today's Tasks
      </AppText>

      {tasks.map((task) => (
        <View
          key={task.id}
          style={styles.taskCard}
        >
          <View style={styles.taskRow}>
            <View
              style={[
                styles.status,
                {
                  backgroundColor: task.completed
                    ? Colors.success
                    : Colors.border,
                },
              ]}
            />

            <View style={{ flex: 1 }}>
              <AppText variant="body">
                {task.title}
              </AppText>

              <AppText
                variant="caption"
                style={styles.priority}
              >
                Priority: {task.priority}
              </AppText>
            </View>
          </View>
        </View>
      ))}

      {/* Floating Button */}
      <View style={styles.fab}>
        <AppText
          variant="h2"
          style={styles.fabText}
        >
          +
        </AppText>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  content: {
    padding: 20,
    paddingBottom: 120,
  },

  header: {
    marginBottom: 24,
  },

  subtitle: {
    color: Colors.textLight,
    marginTop: 6,
  },

  progressCard: {
    backgroundColor: Colors.cardBlue,
    padding: 20,
    borderRadius: 18,
    marginBottom: 24,
  },

  progressText: {
    color: Colors.primary,
    marginTop: 10,
  },

  progressCaption: {
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
    width: "38%",
    height: "100%",
    backgroundColor: Colors.primary,
  },

  sectionTitle: {
    marginBottom: 12,
  },

  taskCard: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: Colors.border,
  },

  taskRow: {
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

  fab: {
    position: "absolute",
    right: 24,
    bottom: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },

  fabText: {
    color: Colors.white,
  },
});