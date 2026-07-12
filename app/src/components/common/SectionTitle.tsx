import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import { Colors } from "../../theme/colors";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <View style={styles.container}>
      <AppText variant="h2" style={styles.title}>
        {title}
      </AppText>

      {subtitle && (
        <AppText variant="caption" style={styles.subtitle}>
          {subtitle}
        </AppText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },

  title: {
    color: Colors.text,
  },

  subtitle: {
    marginTop: 4,
    color: Colors.textLight,
  },
});