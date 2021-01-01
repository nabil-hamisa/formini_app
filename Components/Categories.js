import * as React from "react";

import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Appbar } from "react-native-paper";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("screen");
const data = [
  {
    id: 1,
    title: "lorem",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 7,
    title: "lorem",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    title: "lorem",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    title: "lorem",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 5,
    title: "lorem",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 6,
    title: "lorem",
    image: "https://picsum.photos/200/300",
  },
];
const Cat = ({ item }) => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={{ uri: item.image }} style={styles.image}>
      <TouchableOpacity onPress={() => navigation.navigate("SpecialistList")}>
        <Image
          source={{
            uri: item.image,
          }}
          resizeMode="cover"
        />
        <Text style={styles.text}>{item.title}</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};
const Categories = () => {
  return (
    <View>
      <Appbar.Header style={{ backgroundColor: "#FFFFFF", elevation: 0 }}>
        <Appbar.Content
          title="Categories"
          titleStyle={{ color: "black", padding: 20 }}
        />
      </Appbar.Header>
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

    height: height * 0.2,
    width: width * 0.8,
    resizeMode: "contain",
    justifyContent: "center",
    marginVertical: 10,
    marginHorizontal: width * 0.1,
  },
  text: {
    justifyContent: "flex-end",
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default Categories;
