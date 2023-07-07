import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ImageScreen from "./app/screens/ImageScreen";
import { View } from "react-native";
import AppCard from "./app/components/AppCard";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  return (
    <View>
      {/* <WelcomeScreen /> */}
      <ImageScreen />
    {/* <ListingDetailsScreen/> */}
    </View>
  );
}
