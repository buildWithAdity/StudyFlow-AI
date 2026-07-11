import { View, StyleSheet } from "react-native";

import AppText from "../../components/common/AppText";
import { Colors } from "../../theme/colors";

export default function AIScreen() {
  return (
    <View style={styles.container}>
      <AppText variant="h1">AI Assistant</AppText>

      <AppText variant="body">
        Ask StudyFlow AI anything.
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