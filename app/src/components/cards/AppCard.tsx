import React from "react";
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";

import { Colors } from "../../theme/colors";
import { Radius } from "../../theme/radius";
import { Shadows } from "../../theme/shadows";

interface Props {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export default function AppCard({
  children,
  style,
}: Props) {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.xl,
    padding: 20,
    ...Shadows.md,
  },
});