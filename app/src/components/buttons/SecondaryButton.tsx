import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors } from "../../theme/colors";
import { Radius } from "../../theme/radius";

export default function SecondaryButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Secondary</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: Radius.lg,
    alignItems: "center",
  },

  text: {
    color: Colors.primary,
    fontWeight: "700",
    fontSize: 16,
  },
});