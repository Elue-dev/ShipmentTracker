import { ChipProps } from "@/types/ui/ui.types";
import { cn } from "@/utils";
import { TouchableOpacity } from "react-native";
import AppText from "./text";

export default function Chip({ label, selected, onToggle }: ChipProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      className={cn(
        "bg-cancelled-bg py-3 px-6 rounded-[13px] min-w-[80px]",
        selected && "border-[1.5px] border-primary-400"
      )}
      onPress={onToggle}
    >
      <AppText
        centered
        classNames={cn(
          " capitalize text-[19px]",
          selected ? "text-primary" : "text-cancelled-text"
        )}
      >
        {label}
      </AppText>
    </TouchableOpacity>
  );
}
