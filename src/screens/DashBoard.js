import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { DrawerActions, useNavigation } from "@react-navigation/native";

const DashBoard = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.dispatch(DrawerActions.closeDrawer());
  });
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.busName}>Bus 1</Text>
        <Text style={styles.bustDetail}>Bus Stop: Alazizya</Text>
        <Text style={styles.bustDetail}>Gate: 1</Text>
        <Text style={styles.bustDetail}>Uni section: Alzahir</Text>
        <Text style={styles.bustDetail}>
          0.20 meter away from the bus stop 5
        </Text>
        <Text style={styles.bustDetail}>Count time to arive</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Bus")}
        >
          <Text style={styles.btnText}>Booked</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <Text style={styles.busName}>Bus 1</Text>
        <Text style={styles.bustDetail}>Bus Stop: Alazizya</Text>
        <Text style={styles.bustDetail}>Gate: 1</Text>
        <Text style={styles.bustDetail}>Uni section: Alzahir</Text>
        <Text style={styles.bustDetail}>
          0.20 meter away from the bus stop 5
        </Text>
        <Text style={styles.bustDetail}>Count time to arive</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Bus")}
        >
          <Text style={styles.btnText}>View</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    padding: 10,
  },
  box: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#DFDFDE",
    padding: 10,
    height: 200,
    margin: 5,
  },
  busName: {
    fontSize: 18,
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
