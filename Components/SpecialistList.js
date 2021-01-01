import * as React from "react";

import { Button, Input } from "react-native-elements";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("screen");
function SpecialistList() {
  return (
    <>
      <View style={styles.container}></View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    flex: 1,

    height: height,
    width: width,
    resizeMode: "contain",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default SpecialistList;
