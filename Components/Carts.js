import * as React from "react";

import { Appbar, Avatar, Searchbar } from "react-native-paper";
import { Button, Input } from "react-native-elements";
import { courseImgUrl } from "./config/imghttp";

import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { height, width } = Dimensions.get("screen");
const data = [
  {
    id: 1,
    title: "lorem",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    title: "lorem",
    image: "https://picsum.photos/200/300",
  },
];
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      cart: [],
      total: 0,
    };
  }
  clearCart=()=>{
    AsyncStorage.removeItem('Cart');
    this.setState({cart:[],
      total: 0,
    })
  }
  async componentDidMount() {
    const jsonValue = await AsyncStorage.getItem("Cart");
    this.setState({
      cart: jsonValue !=null? JSON.parse(jsonValue) : [],
    });
    let total = this.state.cart
      .map((course) => course.price)
      .reduce((acc, course) => course + acc);
    console.log(total);
    this.setState({
      total,
    });
  }

  render() {
    const Cat = ({ item }) => {
      const navigation = useNavigation();

      return (
        <View style={styles.item}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("CourseDetails", {
                id: item.id,
                nom: item.name_co,
              })
            }
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
                    {item.name_co}
                  </Text>
                  <Text style={styles.text}>{item.price}$</Text>
                </View>
              </View>
              <View style={{ justifyContent: "center", elevation: 6 }}>
                <Image
                  source={{ uri: courseImgUrl + item.id }}
                  style={{ width: 100, height: 100, borderRadius: 5 }}
                  resizeMode="cover"
                />
                <Text style={styles.title}>{item.name}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      );
    };

    return (
      <View>
        <Appbar.Header style={{ backgroundColor: "#FFFFFF", elevation: 0 }}>
          <Appbar.Content
            title="Cart"
            titleStyle={{ color: "black", padding: 20 }}
          />
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Total:</Text>
          <Text style={{color:'orange', fontSize: 20 }}>{this.state.total}$</Text>
        </Appbar.Header>
        {this.state.cart.length===0?null:<FlatList
          data={this.state.cart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Cat item={item} />}
        />}
        <View style={{flexDirection:'row',justifyContent : 'space-between'}}>
          <Button
            disabled={this.state.cart.length==0}
            title="checkout"
            icon={{
              name: "shopping-cart",
              size: 35,
              color: "orange",
            }}
            buttonStyle={{
              width: width * 0.65,
              marginLeft: width * 0.04,
              backgroundColor: "white",
              borderRadius: 30,
              borderColor: "orange",
              borderWidth: 2,
            }}
            titleStyle={{ color: "orange", alignSelf: "center" }}
          />
          <Button
            title=""
            onPress={this.clearCart}
            icon={<Ionicons name="trash" size={35} color="white" />}
            buttonStyle={{
              width: width * 0.2,
              marginRight:  width * 0.04,
              backgroundColor: "red",
              borderRadius: 30,
              alignSelf: "flex-end"      
                  }}
            titleStyle={{ color: "white", alignSelf: "center" }}
          />
        </View>
      </View>
    );
  }
}

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
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "right",
  },
});
export default Cart;
