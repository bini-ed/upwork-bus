import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Modal,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";

const Bus = () => {
  const [location, setLocation] = useState({});
  const [visible, setVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigation = useNavigation();

  const getLocation = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) setErrorMsg("Permission to access location was denied");
    const { coords } = await Location.getLastKnownPositionAsync({});
    if (coords) setLocation(coords);
    return;
  };

  useEffect(() => {
    getLocation();
  }, []);

  const { latitude, longitude, latitudeDelta, longitudeDelta } = location;

  return (
    <View style={styles.container}>
      {errorMsg ? (
        <Text>Error</Text>
      ) : (
        <MapView
          style={styles.map}
          // initialRegion={{
          //   latitude: latitude,
          //   longitude: longitude,
          //   latitudeDelta: latitudeDelta,
          //   longitudeDelta: longitudeDelta,
          // }}
        />
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert("Your seat has been booked")}
      >
        <Text style={styles.btnText}>Book Seat</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Bus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2,
  },
  button: {
    backgroundColor: "#65C18C",
    width: "40%",
    alignSelf: "center",
    padding: 10,
    marginTop: 10,
  },
  btnText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
