import { View, StyleSheet } from "react-native";

import AppText from "../../components/common/AppText";
import { Colors } from "../../theme/colors";

export default function PlannerScreen() {
  return (
    <View style={styles.container}>
      <AppText variant="h1">Study Planner</AppText>

      <AppText variant="body">
        Plan your study sessions here.
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
});