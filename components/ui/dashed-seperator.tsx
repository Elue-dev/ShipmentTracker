import { View } from "react-native";

export default function DashedSeperator() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      {Array.from({ length: 20 }).map((_, index) => (
        <View
          key={index}
          style={{
            width: 24,
            height: 4,
            backgroundColor: "white",
            flex: 1,
            marginHorizontal: 3,
          }}
        />
      ))}
    </View>
  );
}
