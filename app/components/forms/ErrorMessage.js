import React from "react";
import AppText from "../AppText";
import { StyleSheet } from "react-native";

import defaulStyles from "../../config/styles";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return <AppText style={styles.error}>{error}</AppText>;
}
const styles = StyleSheet.create({
  error: {
    color: defaulStyles.colors.danger,
  },
});

export default ErrorMessage;
