import React, { useState } from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ImageScreen from "./app/screens/ImageScreen";
import { View } from "react-native";
import AppCard from "./app/components/AppCard";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";


export default function App() {

  return (
    <ListingEditScreen />
  );
}
