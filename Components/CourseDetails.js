import * as React from "react";
import { courseImgUrl } from "./config/imghttp";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import { Card, Text, Divider } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { Appbar } from "react-native-paper";
import { Component } from "react";
import { Dimensions ,ScrollView } from "react-native";
import accesClient from "./config/accesClient";
import { useNavigation } from "@react-navigation/native";
import Moment from "moment";

const { height, width } = Dimensions.get("screen");

class CourseDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      CoursesData: {},
    };
  }

  async getcourse(idCourse) {
    await accesClient.get("/course/"+idCourse).then((res) => {
      console.log(res.data.course[0]);

      this.setState({
        CoursesData: res.data.course[0],
      });
    });
  }
  componentDidMount() {
    this.getcourse(this.props.route.params.id);
    console.log(this.state.CoursesData);
  }
/**/ 
  render() {
    const { navigation, route } = this.props;
    const { nom,id } = route.params;
    return (
      <ScrollView>
      <View>
        <Appbar.Header style={{ backgroundColor: "#FFFFFF", elevation: 0 }}>
          <Appbar.Content
            title={nom}
            titleStyle={{ color: "black", padding: 20 }}
          />
        </Appbar.Header>
        <Card containerStyle={styles.card}>
        <Image
            style={styles.image}
            source={{ uri: courseImgUrl + id }}
          />
          <Divider style={{ backgroundColor: "#dfe6e9", marginVertical: 15 }} />
          <Text style={styles.notes}>
            Center Name:{this.state.CoursesData.center}
          </Text>
          <Text style={styles.notes}>
            Course Name: {this.state.CoursesData.name_co}
          </Text>
          <Text style={styles.notes}>
            Category:{this.state.CoursesData.category}
          </Text>

          <Text style={styles.notes}>
            Description: {this.state.CoursesData.description}
          </Text>
          <Divider style={{ backgroundColor: "#dfe6e9", marginVertical: 20 }} />
          <Text style={styles.notes}>
            date:{Moment(this.state.CoursesData.date).format("DD/MM/Y")}
          </Text>
          <Text style={styles.notes}>
            time:{Moment(this.state.CoursesData.date).format("HH:mm")}
          </Text>
          <Text style={styles.notes}>
            Duration:{this.state.CoursesData.duration}H
          </Text>
          <Text style={styles.notes}>
            Rating: {this.state.CoursesData.rating}
          </Text>

          <Divider style={{ backgroundColor: "#dfe6e9", marginVertical: 25 }} />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.time}>
              {" "}
              <Ionicons name="cart" size={25} color="black" /> Buy:
              {this.state.CoursesData.price}$
            </Text>
          </TouchableOpacity>
        </Card>
      </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffa500",
    marginTop: 10,
    marginBottom:10,
    borderWidth: 0,
    borderRadius: 20,
    justifyContent:"center",
  },
  time: {
    alignSelf:"center",

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
    alignSelf:"center",
    borderWidth: 4,
    borderColor: "black",
    width: 350,
    height: 200,
    borderRadius:25,

    backgroundColor: "#ffa500",
  },button:{
    backgroundColor: "#dfe6e9",
     borderRadius:25,
  }
  //============
});

export default function (props) {
  const Navigation = useNavigation();

  return <CourseDetails {...props} Navigation={Navigation} />;
}
