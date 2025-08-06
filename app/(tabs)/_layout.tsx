import { COLORS } from "@/constants/colors";
import { Image } from "expo-image";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary.DEFAULT,
        tabBarInactiveTintColor: COLORS.disabled.text2,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0.2,
          minHeight: 70,
          elevation: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Shipments",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/icons/shipments-focused.svg")
                  : require("../../assets/icons/shipments.svg")
              }
              style={{ height: 26, width: 25 }}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          headerShown: false,
          title: "Scan",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/icons/scan-focused.svg")
                  : require("../../assets/icons/scan.svg")
              }
              style={{ height: 21, width: 27 }}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          headerShown: false,
          title: "Wallet",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/icons/wallet-focused.svg")
                  : require("../../assets/icons/wallet.svg")
              }
              style={{ height: 20, width: 26 }}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/icons/profile-focused.svg")
                  : require("../../assets/icons/profile.svg")
              }
              style={{ height: 24, width: 25 }}
            />
          ),

          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
      />
    </Tabs>
  );
}
