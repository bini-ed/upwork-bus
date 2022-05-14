import React, { useContext, useEffect, useState } from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import {
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import Profile from "../screens/Profile";
import Trips from "../screens/Trips";
import CurrentTrip from "../screens/CurrentTrip";
import AuthContext from "../context/userContext";
import DashBoardNav from "./DashBoardNav";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../screens/firebase-config";
import {
  getDoc,
  doc,
  getFirestore,
  getDocs,
  collection,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { EvilIcons } from "@expo/vector-icons";

const { height } = Dimensions.get("window");

const Drawer = createDrawerNavigator();
const DrawerTab = () => {
  const navigation = useNavigation();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const [users, setUsers] = useState({});

  useEffect(() => {
    const user = auth.currentUser;
    if (user) setUsers(user);
  }, []);

  const CustomDrawer = (props) => {
    return (
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView
          {...props}
          showsVerticalScrollIndicator={false}
        >
          <View style={[styles.drawerProfile]}>
            <View style={styles.profile}>
              <View>
                {/* <Text style={styles.profileName}>Sample user</Text> */}
                <EvilIcons name="user" size={80} color="white" />
                <Text style={styles.phoneNumber}>
                  Hello {users.displayName}
                </Text>
              </View>
            </View>
          </View>
          <DrawerItemList {...props}></DrawerItemList>
        </DrawerContentScrollView>
      </View>
    );
  };
  const handleLogout = async () => {
    await auth
      .signOut()
      .then(() => navigation.navigate("Login"))
      .catch((err) => Alert.alert(err));
  };

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props}></CustomDrawer>}
      screenOptions={{
        headerTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={DashBoardNav}
        options={{
          headerStyle: { backgroundColor: "#4B7BE5" },
          title: () => (
            <View style={styles.listContainer}>
              <Text style={styles.engVersion}>Dashboard</Text>
            </View>
          ),
          headerTitle: "Dashboard",
        }}
      ></Drawer.Screen>

      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          headerStyle: { backgroundColor: "#4B7BE5" },
          title: () => (
            <View style={styles.listContainer}>
              <Text style={styles.engVersion}>Profile</Text>
            </View>
          ),
          headerTitle: "Profile",
        }}
      ></Drawer.Screen>

      <Drawer.Screen
        name="Trips"
        options={{
          headerStyle: { backgroundColor: "#4B7BE5" },
          title: () => (
            <View style={styles.listContainer}>
              <Text style={styles.engVersion}>Trips</Text>
            </View>
          ),
          headerTitle: "Trips",
        }}
        component={Trips}
      ></Drawer.Screen>
      <Drawer.Screen
        name="Current Trip"
        component={CurrentTrip}
        options={{
          headerStyle: { backgroundColor: "#4B7BE5" },
          title: () => (
            <View style={styles.listContainer}>
              <Text style={styles.engVersion}>Current Trip</Text>
            </View>
          ),
          headerTitle: "Current Trip",
        }}
      ></Drawer.Screen>
      <Drawer.Screen
        name="Logout"
        component={""}
        options={{
          headerStyle: { backgroundColor: "#4B7BE5" },
          title: () => (
            <TouchableOpacity onPress={handleLogout}>
              <View style={styles.listContainer}>
                <Text style={styles.engVersion}>Log Out</Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
};
export default DrawerTab;
const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },

  drawerContainer: {
    flexDirection: "row",
    margin: 20,
    marginVertical: 10,
    alignItems: "center",
  },
  drawerLabel: {
    marginHorizontal: 32,
    color: "grey",
    fontSize: 15,
  },
  profile: {
    padding: 10,
    alignItems: "center",
    marginTop: -5,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 5,
    borderColor: "white",
    borderWidth: 1,
  },
  profileName: {
    color: "white",
    fontSize: 25,
    textTransform: "capitalize",
    textAlign: "center",
  },
  phoneNumber: {
    color: "white",
    fontSize: 19,
    textAlign: "center",
  },
  drawerProfile: {
    backgroundColor: "purple",
    height: height / 4,
    marginTop: -10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    flex: 1,
  },

  engVersion: {
    color: "black",
    fontSize: 18,
  },
});
