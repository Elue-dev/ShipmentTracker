import { CommonActions } from "@react-navigation/native";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export function navigationWithReset(
  navigation: any,
  route: string,
  params?: Record<string, any>
) {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: route, params }],
    })
  );
}
