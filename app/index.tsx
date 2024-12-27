import { View, Text, FlatList } from "react-native";
import React from "react";
import { ThemedText } from "../components/ThemedText";
import { usePushNotifications } from "../hooks/usePushNotifications";

const PushApp = () => {
  const { expoPushToken, notifications, sendPushNotification } =
    usePushNotifications();

  return (
    <View
      style={{
        marginHorizontal: 10,
        marginTop: 5,
      }}
    >
      {/* <ThemedText>Token: {expoPushToken}</ThemedText> */}
      <ThemedText
        style={{
          marginTop: 10,
          fontWeight: "bold",
          fontSize: 25,
        }}
      >
        Notificaciones:
      </ThemedText>
      <FlatList />
    </View>
  );
};

export default PushApp;
