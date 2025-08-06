import { ReactNode } from "react";
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
};

export type TextProps = {
  label?: string;
  classNames?: string;
  large?: boolean;
  size?: "md" | "lg";
  styles?: TextStyle;
  centered?: boolean;
  children?: ReactNode;
};

export type TagStatus =
  | "received"
  | "error"
  | "delivered"
  | "cancelled"
  | "on hold";

export type ScrollViewProps = {
  children: ReactNode;
  noMargin?: boolean;
  disableScroll?: boolean;
  containerStyles?: ViewStyle;
  wouldRefresh?: boolean;
  refresh?: boolean;
  handleRefresh?: VoidFunction;
};
