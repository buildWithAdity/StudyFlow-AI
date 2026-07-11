import { View } from "react-native";
import AppText from "../../../components/common/AppText";

import { styles } from "../HomeScreen.styles";

export default function GreetingHeader() {
  return (
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
  );
}