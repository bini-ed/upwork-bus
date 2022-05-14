import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import LocalStorage from "@react-native-async-storage/async-storage";
import AuthContext from "./src/context/userContext";
import { StatusBar, View } from "react-native";
import HomePageStackNavigation from "./src/navigation/HomePageStackNavigation";


function App() {
  const [user, setUser] = useState({});


  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <StatusBar />
      <NavigationContainer>
        <HomePageStackNavigation></HomePageStackNavigation>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
