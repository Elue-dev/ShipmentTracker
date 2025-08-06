import Button from "@/components/ui/button";
import AppText from "@/components/ui/text";
import { COLORS } from "@/constants/colors";
import { isEmail } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
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

  const onSubmit = (data: LoginFormData) => {
    router.back();
    router.replace("/(tabs)");
  };

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "space-between",
            }}
            keyboardShouldPersistTaps="handled"
          >
            <View className="px-5 pt-5">
              <AppText large>Login</AppText>
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
                        onBlur={onBlur}
                        keyboardType="email-address"
                        animationDuration={200}
                        containerStyles={styles.inputContainer}
                        inputStyles={styles.inputStyle}
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
                        onBlur={onBlur}
                        animationDuration={200}
                        containerStyles={styles.inputContainer}
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
                // disabled={!isValid}
                // onPress={handleSubmit(onSubmit)}
                onPress={() => router.replace("/(tabs)")}
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
