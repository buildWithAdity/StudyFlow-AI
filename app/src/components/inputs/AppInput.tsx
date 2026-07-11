import { TextInput, StyleSheet } from "react-native";
import { Colors } from "../../theme/colors";
import { Radius } from "../../theme/radius";

export default function AppInput() {
  return (
    <TextInput
      placeholder="Enter text"
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Radius.lg,
    padding: 16,
    fontSize: 16,
    backgroundColor: Colors.surface,
  },
});