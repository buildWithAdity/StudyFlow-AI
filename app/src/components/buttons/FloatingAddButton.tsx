import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "../common/AppText";
import { Colors } from "../../theme/colors";

interface FloatingButtonProps {
  onPress?: () => void;
  icon?: string;
}

export default function FloatingButton({
  onPress,
  icon = "+",
}: FloatingButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <AppText variant="h2" style={styles.icon}>
        {icon}
      </AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    right: 24,
    bottom: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,

    // iOS Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },

  icon: {
    color: Colors.white,
  },
});