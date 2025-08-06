import Button from "@/components/ui/button";
import AppText from "@/components/ui/text";
import { IS_ANDROID_DEVICE, IS_IOS_DEVICE } from "@/constants";
import { COLORS } from "@/constants/colors";
import { isEmail, navigationWithReset } from "@/utils";
import { Ionicons } from "@expo/vector-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { router, useNavigation } from "expo-router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { SafeAreaView } from "react-native-safe-area-context";
import { z } from "zod";

const loginFormSchema = z.object({
  identifier: z
    .string()
    .min(3, "Enter at least 3 characters")
    .refine((val) => isEmail(val) || /^[a-zA-Z0-9_]+$/.test(val), {
      message: "Enter a valid email or username",
    }),
  password: z.string().min(10, "Password must be at least 10 characters"),
});

type LoginFormData = z.infer<typeof loginFormSchema>;

export default function Login() {
  const [focusedStates, setFocusedStates] = useState({
    identifier: false,
    password: false,
  });
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
    mode: "onChange",
  });

  async function onSubmit(data: LoginFormData) {
    if (IS_IOS_DEVICE) {
      router.back();
      setTimeout(() => navigationWithReset(navigation, "(tabs)"), 200);
      return;
    }

    navigationWithReset(navigation, "(tabs)");
  }

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        {IS_ANDROID_DEVICE && (
          <TouchableOpacity
            onPress={() => router.back()}
            className="flex-row items-center mx-3 mt-4"
          >
            <Ionicons
              name="chevron-back"
              size={24}
              color={COLORS.primary.DEFAULT}
            />
            <AppText classNames="text-primary text-[18px] mt-[1px]">
              Cancel
            </AppText>
          </TouchableOpacity>
        )}

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "space-between",
            }}
            keyboardShouldPersistTaps="handled"
          >
            <View className="px-5 pt-5">
              <AppText large size="xlg">
                Login
              </AppText>
              <AppText classNames="max-w-[95%] mt-2">
                Please enter your First, Last name and your phone number in
                order to register
              </AppText>

              <View className="mt-10 gap-6">
                <Controller
                  control={control}
                  name="identifier"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <>
                      <FloatingLabelInput
                        label="Username / Email"
                        value={value}
                        onChangeText={onChange}
                        keyboardType="email-address"
                        animationDuration={200}
                        containerStyles={{
                          ...styles.inputContainer,
                          borderWidth: focusedStates.identifier ? 1.5 : 0,
                          borderColor: COLORS.primary["400"],
                        }}
                        inputStyles={styles.inputStyle}
                        onFocus={() =>
                          setFocusedStates((prev) => ({
                            ...prev,
                            identifier: true,
                          }))
                        }
                        onBlur={() => {
                          onBlur;
                          setFocusedStates((prev) => ({
                            ...prev,
                            identifier: false,
                          }));
                        }}
                      />

                      {errors.identifier && (
                        <AppText classNames="text-base text-red-500 -mt-4">
                          {errors.identifier.message}
                        </AppText>
                      )}
                    </>
                  )}
                />

                <Controller
                  control={control}
                  name="password"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <>
                      <FloatingLabelInput
                        label="Password"
                        value={value}
                        isPassword
                        onChangeText={onChange}
                        animationDuration={200}
                        onFocus={() =>
                          setFocusedStates((prev) => ({
                            ...prev,
                            password: true,
                          }))
                        }
                        onBlur={() => {
                          onBlur;
                          setFocusedStates((prev) => ({
                            ...prev,
                            password: false,
                          }));
                        }}
                        containerStyles={{
                          ...styles.inputContainer,
                          borderWidth: focusedStates.password ? 1.5 : 0,
                          borderColor: COLORS.primary["400"],
                        }}
                        inputStyles={styles.inputStyle}
                        customShowPasswordComponent={<Text></Text>}
                        customHidePasswordComponent={<Text></Text>}
                      />

                      {errors.password && (
                        <AppText classNames="text-base text-red-500 -mt-4">
                          {errors.password.message}
                        </AppText>
                      )}
                    </>
                  )}
                />
              </View>
            </View>

            <View className="px-5 pb-16">
              <Button
                label="Login"
                disabled={!isValid}
                onPress={handleSubmit(onSubmit)}
              />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: COLORS.cancelled.bg,
    borderWidth: 0,
    padding: 15,
    borderRadius: 8,
  },
  inputStyle: {
    color: COLORS.primary.DEFAULT,
    fontSize: 16,
    fontFamily: "Regular",
  },
});
