import React from "react";
import { View, StyleSheet, Image, Button, SafeAreaView } from "react-native";
import colors from '../config/colors'

function ImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
      </View>
      <View style={styles.deleteIcon}>
      </View>
      <Image source={require("../assets/chair.jpg")} style={styles.image} />
    </View>
  );
}

export default ImageScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    backgroundColor: colors.primary,
    width: 50,
    height: 50,
    position: 'absolute',
    top: 40,
    left: 30,
  },
  deleteIcon: {
    backgroundColor: colors.secondary,
    width: 50,
    height: 50,
    position: 'absolute',
    top: 40,
    right: 30,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
});
