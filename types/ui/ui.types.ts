import { Dispatch, ReactNode, SetStateAction } from "react";
import { TextStyle, ViewStyle } from "react-native";

export type ButtonProps = {
  onPress: () => void;
  isLoading?: boolean;
  label?: string;
  loadingText?: string;
  classNames?: string;
  disabled?: boolean;
  outlined?: boolean;
  asChild?: boolean;
  children?: ReactNode;
  styles?: ViewStyle;
  centered?: boolean;
  full?: boolean;
  danger?: boolean;
  uppercased?: boolean;
  softBg?: boolean;
  inverted?: boolean;
  clear?: boolean;
  lightBlue?: boolean;
  success?: boolean;
  flexed?: boolean;
};

export type TextProps = {
  label?: string;
  classNames?: string;
  large?: boolean;
  size?: "md" | "lg" | "xlg";
  styles?: TextStyle;
  centered?: boolean;
  primary?: boolean;
  children?: ReactNode;
};

export type TagStatus =
  | "received"
  | "delivered"
  | "putaway"
  | "rejected"
  | "lost"
  | "cancelled"
  | "on hold";

export type ScrollViewProps = {
  children: ReactNode;
  noMargin?: boolean;
  classNames?: string;
  disableScroll?: boolean;
  containerStyles?: ViewStyle;
  wouldRefresh?: boolean;
  refresh?: boolean;
  handleRefresh?: VoidFunction;
};

export type ChipProps = {
  label: TagStatus;
  selected: boolean;
  onToggle: () => void;
};

export type FiltersSheetProps = {
  localSelected: TagStatus[];
  setLocalSelected: Dispatch<SetStateAction<TagStatus[]>>;
};
