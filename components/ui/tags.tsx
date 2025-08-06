import { COLORS } from "@/constants/colors";
import { TagStatus } from "@/types/ui/ui.types";
import { Text, View } from "react-native";

export default function Tag({ status }: { status: TagStatus }) {
  const tagBackgroundColor: Record<TagStatus, string> = {
    received: COLORS.primary["300"],
    rejected: COLORS.danger.bg,
    delivered: COLORS.success.bg,
    cancelled: COLORS.cancelled.bg,
    "on hold": COLORS.warning.bg,
    putaway: COLORS.cancelled.bg,
    lost: COLORS.danger.bg,
  };

  const tagTextColor: Record<TagStatus, string> = {
    received: COLORS.primary.DEFAULT,
    rejected: COLORS.danger.text,
    delivered: COLORS.success.text,
    cancelled: COLORS.cancelled.text,
    "on hold": COLORS.warning.text,
    putaway: COLORS.cancelled.text,
    lost: COLORS.danger.text,
  };

  return (
    <View
      style={{ backgroundColor: tagBackgroundColor[status] }}
      className="p-3 rounded-lg border border-white min-w-[100px]"
    >
      <Text
        style={{ color: tagTextColor[status] }}
        className="uppercase text-center"
      >
        {status}
      </Text>
    </View>
  );
}
