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
    title: "lorem",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 7,
    title: "lorem",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 7,
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
];
const Cat = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => navigation.navigate("SpecialistList")}
      >
        <View style={{ flexDirection: "row", height: 130 }}>
          <View
            style={{
              backgroundColor: "white",
              height: 130,
              width: "99%",
              position: "absolute",

              left: "10%",
              borderTopLeftRadius: 30,
              borderBottomLeftRadius: 30,
              borderTopRightRadius: 20,
            }}
          >
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text
                style={{
                  position: "absolute",

                  left: "25%",
                  fontSize: 23,
                  fontWeight: "bold",
                }}
              >
                {item.title}
              </Text>
            </View>
          </View>
          <View style={{ justifyContent: "center", elevation: 6 }}>
            <Image
              source={{
                uri: item.image,
              }}
              style={{ width: 100, height: 100, borderRadius: 5 }}
              resizeMode="cover"
            />
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const Cart = () => {
  return (
    <View>
      <Appbar.Header style={{ backgroundColor: "#FFFFFF", elevation: 0 }}>
        <Appbar.Content
          title="Cart"
          titleStyle={{ color: "black", padding: 20 }}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Total:</Text>
        <Text style={{ fontSize: 20 }}>220DT</Text>
      </Appbar.Header>
      <FlatList data={data} renderItem={({ item }) => <Cat item={item} />} />
      <Button
        title="checkout"
        icon={{
          name: "shopping-cart",
          size: 35,
          color: "orange",
        }}
        buttonStyle={{
          width: width * 0.5,
          marginLeft: width * 0.25,
          backgroundColor: "white",
          borderRadius: 30,
        }}
        titleStyle={{ color: "orange", alignSelf: "center" }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  item: {
    flex: 1,

    height: height * 0.2,
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
export default Cart;
