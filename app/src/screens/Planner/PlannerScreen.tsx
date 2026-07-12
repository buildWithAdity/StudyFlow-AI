import { ScrollView, StyleSheet, View } from "react-native";

import GreetingHeader from "../../components/GreetingHeader";
import ProgressCard from "../../components/cards/ProgressCard";
import TaskCard from "../../components/cards/TaskCard";
import StatCard from "../../components/cards/StatCard";
import FloatingButton from "../../components/buttons/FloatingButton";

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
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Greeting */}
        <GreetingHeader />

        {/* Statistics */}
        <View style={styles.statsRow}>
          <StatCard title="🔥 Streak" value="7 Days" />

          <StatCard title="⏱ Focus" value="12 hrs" />
        </View>

        {/* Progress */}
        <ProgressCard completed={3} total={8} />

        {/* Tasks */}
        <AppText variant="title" style={styles.sectionTitle}>
          Today's Tasks
        </AppText>

        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            priority={task.priority}
            completed={task.completed}
          />
        ))}
      </ScrollView>

      {/* Floating Add Button */}
      <FloatingButton
        onPress={() => {
          console.log("Add Task");
        }}
      />
    </>
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

  statsRow: {
    flexDirection: "row",
    marginBottom: 24,
  },

  sectionTitle: {
    marginBottom: 12,
  },
});