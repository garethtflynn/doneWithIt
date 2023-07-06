import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ImageScreen from "./app/screens/ImageScreen";
import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
     <WelcomeScreen />
      {/* // <ImageScreen /> */}
    </View>
  );
}
