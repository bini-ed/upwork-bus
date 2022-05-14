import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase-config";
import { useState } from "react";
import { getFirestore, setDoc, doc } from "firebase/firestore";

const Home = () => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.Middle}>
        <Text style={styles.LoginText}>Welcome! </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Map")}
          style={[styles.button, { backgroundColor: "#00CFEB90" }]}
        >
          <Text style={{ fontSize: 17, fontWeight: "400", color: "white" }}>
            Map
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1873AA",
    alignItems: "center",
    justifyContent: "center",
  },
  LoginText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#EDB841",
    marginTop: 25,
  },
  Middle: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 250,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    borderColor: "#fff",
    borderWidth: 1,
  },
});
