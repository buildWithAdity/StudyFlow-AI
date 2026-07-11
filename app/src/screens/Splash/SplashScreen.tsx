import { StyleSheet, View } from "react-native";
import AppText from "../../components/common/AppText";
import { Colors } from "../../theme/colors";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <AppText variant="h1">StudyFlow AI</AppText>

      <AppText variant="body" style={styles.subtitle}>
        Organize • Focus • Achieve
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

  subtitle: {
    marginTop: 12,
    color: Colors.gray,
  },
});