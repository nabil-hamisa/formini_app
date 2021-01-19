import * as React from "react";
import { courseImgUrl } from "./config/imghttp";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Card, Text, Divider } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { Appbar } from "react-native-paper";
import { Component } from "react";
import { Dimensions } from "react-native";
import accesClient from "./config/accesClient";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("screen");

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      CoursesData: "",
    };
  }

  async getcourse() {
    await accesClient.get("/course").then((res) => {
      this.setState({
        CoursesData: res.data.course,
      });
    });
  }
  getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("user");
      console.log("im here" + jsonValue);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      return null;
    }
  };

  async componentDidMount() {
    this.getcourse();
    var logged = await this.getData();
    logged ? null : this.props.navigation.navigate("Login");
  }

  render() {
    const { navigation } = this.props;

    const Courses = ({ item }) => {
      return (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("CourseDetails", {
              id: item.id,
              nom: item.name_co,
            })
          }
        >
          <Card containerStyle={styles.card}>
            <Image
              style={styles.image}
              source={{ uri: courseImgUrl + item.id }}
            />
            <Divider
              style={{ backgroundColor: "#dfe6e9", marginVertical: 15 }}
            />
            <Text style={styles.notes}>Center Name:{item.center}</Text>
            <Text style={styles.notes}>Course Name: {item.name_co}</Text>
            <Text style={styles.notes}>Category:{item.category}</Text>
            <Divider
              style={{ backgroundColor: "#dfe6e9", marginVertical: 15 }}
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.time}>
                {" "}
                <Ionicons name="cart" size={25} color="black" /> Buy:
                {item.price}$
              </Text>
            </TouchableOpacity>
          </Card>
        </TouchableOpacity>
      );
    };

    return (
      <View>
        <Appbar.Header style={{ backgroundColor: "#FFFFFF", elevation: 0 }}>
          <Appbar.Content
            title="New Courses"
            titleStyle={{ color: "black", padding: 20 }}
          />
        </Appbar.Header>
        <FlatList
          contentContainerStyle={{ paddingBottom: 80 }}
          data={this.state.CoursesData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Courses item={item} />}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffa500",
    marginTop: 20,

    borderWidth: 0,
    borderRadius: 20,
    flex: 1,
    justifyContent: "center",
  },
  time: {
    alignSelf: "center",

    fontSize: 25,
    color: "black",
    fontWeight: "bold",
  },
  notes: {
    fontSize: 20,
    color: "#fff",
    textTransform: "capitalize",
  },
  image: {
    alignSelf: "center",
    borderWidth: 4,
    borderColor: "black",
    width: 350,
    height: 200,
    borderRadius: 25,

    backgroundColor: "#ffa500",
  },
  button: {
    backgroundColor: "#dfe6e9",
    borderRadius: 25,
  },

  //============
});

export default function (props) {
  const Navigation = useNavigation();

  return <Home {...props} Navigation={Navigation} />;
}
