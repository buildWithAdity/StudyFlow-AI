import { Text, TextProps } from "react-native";
import { Typography } from "../../theme/typography";
import { Colors } from "../../theme/colors";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "title"
  | "body"
  | "caption"
  | "small";

interface Props extends TextProps {
  variant?: Variant;
}

export default function AppText({
  variant = "body",
  style,
  children,
  ...props
}: Props) {
  return (
    <Text
      style={[
        Typography[variant],
        {
          color: Colors.text,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}