import { View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppText from "../../components/common/AppText";
import SectionTitle from "../../components/common/SectionTitle";

import PrimaryButton from "../../components/buttons/PrimaryButton";

import AppCard from "../../components/cards/AppCard";
import StatCard from "../../components/cards/StatCard";

import { Colors } from "../../theme/colors";
import { styles } from "./HomeScreen.styles";

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}

      <View style={styles.header}>
        <AppText variant="h1">
          Good Morning 👋
        </AppText>

        <AppText
          variant="body"
          style={styles.subtitle}
        >
          Ready to achieve today's goals?
        </AppText>
      </View>

      {/* Hero Card */}

      <AppCard style={styles.heroCard}>
        <AppText variant="h2">
          Today's Goal
        </AppText>

        <AppText
          variant="body"
          style={styles.subtitle}
        >
          Complete 3 study sessions.
        </AppText>

        <View style={{ marginTop: 20 }}>
          <PrimaryButton
            title="Start Studying"
            onPress={() => {}}
          />
        </View>
      </AppCard>

      {/* Progress */}

      <View style={styles.section}>
        <SectionTitle title="Today's Progress" />

        <View style={styles.statsGrid}>
          <StatCard
            icon="book-outline"
            title="Tasks"
            value="0"
          />

          <StatCard
            icon="time-outline"
            title="Hours"
            value="0h"
          />
        </View>

        <View style={styles.statsGrid}>
          <StatCard
            icon="flame-outline"
            title="Streak"
            value="0"
          />

          <StatCard
            icon="flag-outline"
            title="Goals"
            value="0"
          />
        </View>
      </View>

      {/* Quick Actions */}

      <View style={styles.section}>
        <SectionTitle title="Quick Actions" />

        <View style={styles.quickActionsGrid}>
          <AppCard style={styles.actionCard}>
            <Ionicons
              name="calendar-outline"
              size={28}
              color={Colors.primary}
            />

            <AppText
              variant="h3"
              style={styles.actionTitle}
            >
              Planner
            </AppText>

            <AppText variant="body">
              Organize your study schedule.
            </AppText>
          </AppCard>

          <AppCard style={styles.actionCard}>
            <Ionicons
              name="timer-outline"
              size={28}
              color={Colors.primary}
            />

            <AppText
              variant="h3"
              style={styles.actionTitle}
            >
              Focus Timer
            </AppText>

            <AppText variant="body">
              Stay focused with Pomodoro.
            </AppText>
          </AppCard>

          <AppCard style={styles.actionCard}>
            <Ionicons
              name="sparkles-outline"
              size={28}
              color={Colors.primary}
            />

            <AppText
              variant="h3"
              style={styles.actionTitle}
            >
              AI Assistant
            </AppText>

            <AppText variant="body">
              Get AI-powered study help.
            </AppText>
          </AppCard>

          <AppCard style={styles.actionCard}>
            <Ionicons
              name="bar-chart-outline"
              size={28}
              color={Colors.primary}
            />

            <AppText
              variant="h3"
              style={styles.actionTitle}
            >
              Analytics
            </AppText>

            <AppText variant="body">
              Track your learning progress.
            </AppText>
          </AppCard>
        </View>
      </View>
    </ScrollView>
  );
}