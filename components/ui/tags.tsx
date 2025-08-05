import { COLORS } from "@/constants/colors";
import { TagStatus } from "@/types/ui/ui.types";
import { Text, View } from "react-native";

export default function Tag({ status }: { status: TagStatus }) {
  const tagBackgroundColor: Record<TagStatus, string> = {
    received: COLORS.primary["300"],
    error: COLORS.danger.bg,
    delivered: COLORS.success.bg,
    cancelled: COLORS.cancelled.bg,
    "on hold": COLORS.warning.bg,
  };

  const tagTextColor: Record<TagStatus, string> = {
    received: COLORS.primary.DEFAULT,
    error: COLORS.danger.text,
    delivered: COLORS.success.text,
    cancelled: COLORS.cancelled.text,
    "on hold": COLORS.warning.text,
  };

  return (
    <View
      style={{ backgroundColor: tagBackgroundColor[status] }}
      className="p-3 rounded-lg"
    >
      <Text style={{ color: tagTextColor[status] }} className="uppercase">
        {status}
      </Text>
    </View>
  );
}
