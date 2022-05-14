import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import {
  Input,
  NativeBaseProvider,
  Button,
  Icon,
  Box,
  Image,
  AspectRatio,
  ScrollView,
} from "native-base";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { alignContent, flex, flexDirection, width } from "styled-system";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase-config";
import { getFirestore, setDoc, doc } from "firebase/firestore";

function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [district, setDistrict] = useState("");
  const [BO, setBONO] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore();

  const handleCreateAccount = async () => {
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     console.log("Account created!");
    //     const user = userCredential.user;
    //     LocalStorage.setItem("userName", user.displayName);
    //     A();
    //     navigation.navigate("Login");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     Alert.alert(error.message);
    //   });
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUser, { displayName: name });
      console.log("logged in with", user.email);
    } catch (error) {
      alert(error.message);
    }
  };
  async function A() {
    await setDoc(doc(firestore, "users", email), {
      Name: name,
      Email: email,
      Phone: phone,
      District: district,
      BulidingNumber: BO,
    });
  }
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.Middle}>
          <Image
            source={require("./Logo1.png")}
            style={styles.profilePicture}
          />
          <Text style={styles.LoginText}>SignUp</Text>
        </View>

        <View>
          <View></View>
          <View>
            <Text style={{ fontSize: 17, fontWeight: "400", color: "white" }}>
              Name:{" "}
            </Text>
            <TextInput
              onChangeText={(text) => setName(text)}
              style={styles.input}
              placeholder="Your name"
            />
          </View>
          <View>
            <Text style={{ fontSize: 17, fontWeight: "400", color: "white" }}>
              E-mail
            </Text>
            <TextInput
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
              placeholder="example@outlook.com"
            />
          </View>
          <View>
            <Text style={{ fontSize: 17, fontWeight: "400", color: "white" }}>
              Password
            </Text>
            <TextInput
              onChangeText={(text) => setPassword(text)}
              style={styles.input}
              placeholder="password"
              secureTextEntry={true}
            />
          </View>
          <View>
            <Text style={{ fontSize: 17, fontWeight: "400", color: "white" }}>
              Phone Number:{" "}
            </Text>
            <TextInput
              onChangeText={(text) => setPhone(text)}
              style={styles.input}
              placeholder="05XXXXXXXX"
            />
          </View>
          <View>
            <Text style={{ fontSize: 17, fontWeight: "400", color: "white" }}>
              District:{" "}
            </Text>
            <TextInput
              onChangeText={(text) => setDistrict(text)}
              style={styles.input}
              placeholder="Your district"
            />
          </View>
          <View>
            <Text style={{ fontSize: 17, fontWeight: "400", color: "white" }}>
              Buliding Number:{" "}
            </Text>
            <TextInput
              onChangeText={(text) => setBONO(text)}
              style={styles.input}
              placeholder="Your district"
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={handleCreateAccount}
              style={[styles.button, { backgroundColor: "#6792F090" }]}
            >
              <Text style={{ fontSize: 17, fontWeight: "400", color: "white" }}>
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <Signup />
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  LoginText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#EDB841",
    marginTop: 25,
  },
  Middle: {
    alignItems: "center",
    justifyContent: "center",
  },
  text2: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 5,
    marginBottom: 10,
  },
  image: {
    marginTop: 100,
    width: 150,
    height: 150,
  },
  signupText: {
    fontWeight: "bold",
    color: "#EDB841",
  },
  lineStyle: {
    flexDirection: "row",
    marginTop: 50,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5,
    alignItems: "center",
  },
  imageStyle: {
    width: 80,
    height: 80,
    marginLeft: 20,
  },
  boxStyle: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "space-around",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  login: {
    width: 350,
    height: 800,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  input: {
    width: 250,
    height: 40,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ffffff90",
    marginBottom: 20,
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
  container: {
    flex: 1,
    backgroundColor: "#1873AA",
    alignItems: "center",
    justifyContent: "center",
  },

  login: {
    width: 350,
    height: 300,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    paddingTop: 20,
    alignItems: "center",
    marginTop: 30,
  },
  profilePicture: {
    width: 175,
    height: 175,
    borderRadius: 50,
    borderWidth: 1,
    marginTop: 30,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#fff",
    marginBottom: 20,
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
