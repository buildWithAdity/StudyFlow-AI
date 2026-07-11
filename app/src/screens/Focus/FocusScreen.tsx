import { View, StyleSheet } from "react-native";

import AppText from "../../components/common/AppText";
import { Colors } from "../../theme/colors";

export default function FocusScreen() {
  return (
    <View style={styles.container}>
      <AppText variant="h1">Pomodoro Focus</AppText>

      <AppText variant="body">
        Focus timer coming soon.
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