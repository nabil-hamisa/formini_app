import * as React from "react";

import { Appbar, Avatar, Searchbar } from "react-native-paper";
import { Button, Input } from "react-native-elements";
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
const { height, width } = Dimensions.get("screen");
const Profile = () => {
  return (
    <View>
      <Appbar.Header style={{ backgroundColor: "#FFFFFF", elevation: 0 }}>
        <Appbar.Content
          title="Profile"
          titleStyle={{ color: "black", padding: 20 }}
        />
      </Appbar.Header>
    </View>
  );
};

export default Profile;
