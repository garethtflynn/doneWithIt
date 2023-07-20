import React from "react";
import * as Yup from "yup";
import { StyleSheet } from 'react-native';

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";

function RegisterScreen(props) {
  
const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{name:"", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCorrect={true}
          icon="account"
          name="name"
          placeholder="name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
    container:{
        padding:10
    }
})

export default RegisterScreen;
