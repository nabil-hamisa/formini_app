import * as React from "react";

import { Appbar, Avatar, Searchbar } from "react-native-paper";
import { Button, Input } from "react-native-elements";
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("screen");
const data = [
  {
    id: 1,

    image: "https://picsum.photos/200/300",
  },
  {
    id: 7,

    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,

    image: "https://picsum.photos/200/300",
  },
  {
    id: 4,

    image: "https://picsum.photos/200/300",
  },
  {
    id: 5,

    image: "https://picsum.photos/200/300",
  },
  {
    id: 6,

    image: "https://picsum.photos/200/300",
  },
];

const Cat = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("SpecialistList")}>
      <ImageBackground
        source={{ uri: item.image }}
        style={styles.image}
      ></ImageBackground>
    </TouchableOpacity>
  );
};
const Search = () => {
  return (
    <View>
      <Appbar.Header style={{ backgroundColor: "#FFFFFF", elevation: 0 }}>
        <Appbar.Content
          title="Search"
          titleStyle={{ color: "black", padding: 20 }}
        />
      </Appbar.Header>
      <View style={{ marginHorizontal: 10 }}>
        <Searchbar
          placeholder="Search"
          style={{
            borderWidth: 1,
            borderColor: "white",
            elevation: 15,
            margin: 20,
          }}
        />
      </View>
      <FlatList data={data} renderItem={({ item }) => <Cat item={item} />} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,

    height: height * 0.5,
    width: width * 0.8,
    resizeMode: "contain",
    justifyContent: "center",
    marginVertical: 10,
    marginHorizontal: width * 0.1,
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default Search;
