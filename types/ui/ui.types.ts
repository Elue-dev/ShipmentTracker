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
};

export type TextProps = {
  label?: string;
  classNames?: string;
  asChild?: boolean;
  large?: boolean;
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
