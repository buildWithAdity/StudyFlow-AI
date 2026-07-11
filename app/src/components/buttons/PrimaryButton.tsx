import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors } from "../../theme/colors";
import { Radius } from "../../theme/radius";

interface Props {
  title: string;
  onPress?: () => void;
}

export default function PrimaryButton({
  title,
  onPress,
}: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: Radius.lg,
    alignItems: "center",
  },

  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});