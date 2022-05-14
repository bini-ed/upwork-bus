import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";

import { DrawerActions, useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.dispatch(DrawerActions.closeDrawer());
  });
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Name"
        ></TextInput>
        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email"
        ></TextInput>
        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Phone Number"
        ></TextInput>
        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="District"
        ></TextInput>
        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Building number"
        ></TextInput>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert("Saved", "User is successfully saved")}
      >
        <Text style={styles.btnText}>View</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
  },
  textInput: {
    backgroundColor: "whitesmoke",
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 5,
    marginVertical: 15,
  },
  form: {
    backgroundColor: "lightgrey",
    width: "90%",
    padding: 10,
    marginTop: 50,
  },
  button: {
    backgroundColor: "#65C18C",
    width: "40%",
    alignSelf: "center",
    padding: 10,
    position: "absolute",
    bottom: 150,
    right: 20,
  },
  btnText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
