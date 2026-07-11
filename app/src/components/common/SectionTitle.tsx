import AppText from "./AppText";

export default function SectionTitle({
  title,
}: {
  title: string;
}) {
  return <AppText variant="h2">{title}</AppText>;
}