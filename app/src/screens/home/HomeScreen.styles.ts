import { StyleSheet } from "react-native";
import { Colors } from "../../theme/colors";
import { Radius } from "../../theme/radius";
import { Shadows } from "../../theme/shadows";
import { Spacing } from "../../theme/spacing";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  content: {
    padding: Spacing.lg,
    paddingBottom: Spacing.xxl,
  },

  header: {
    marginTop: Spacing.xl,
    marginBottom: Spacing.xl,
  },

  subtitle: {
    marginTop: Spacing.sm,
    color: Colors.gray,
  },

  heroCard: {
    marginBottom: Spacing.xl,
  },

  progressCard: {
    marginTop: Spacing.md,
  },

  section: {
    marginTop: Spacing.xl,
  },

  statsGrid: {
    flexDirection: "row",
    gap: Spacing.md,
    marginTop: Spacing.md,
  },

  quickActionsGrid: {
    marginTop: Spacing.md,
    gap: Spacing.md,
  },

  actionCard: {
    borderRadius: Radius.lg,
    ...Shadows.md,
  },

  actionTitle: {
    marginTop: Spacing.sm,
    marginBottom: Spacing.xs,
  },
});