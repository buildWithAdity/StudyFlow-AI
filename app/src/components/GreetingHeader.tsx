import { View, StyleSheet } from "react-native";
import AppText from "./common/AppText";
import { Colors } from "../theme/colors";

export default function GreetingHeader() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  }

  return (
    <View style={styles.container}>
      <AppText variant="h1">
        {greeting} 👋
      </AppText>

      <AppText variant="body" style={styles.subtitle}>
        Welcome back! Let's make today productive.
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },

  subtitle: {
    marginTop: 6,
    color: Colors.textLight,
  },
});