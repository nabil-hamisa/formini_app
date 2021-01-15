import * as React from "react";
import { courseImgUrl } from "./config/imghttp";
import { Button, Input } from "react-native-elements";
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Card, Text,Divider } from "react-native-elements";

import { Component } from "react";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import accesClient from "./config/accesClient";
import { useNavigation } from "@react-navigation/native";
import Moment from 'moment';

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
      console.log(res.data.course);

      this.setState({
        CoursesData: res.data.course,
      });
    });
  }
  componentDidMount() {
    this.getcourse();
  }

  render() {
    const { navigation } = this.props;

    const Courses = ({ item }) => {
      return (

          <Card containerStyle={styles.card}>
            <View
            style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}
            >
              <TouchableOpacity>
              <Image
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    resizeMode: "cover",
                    backgroundColor: "#ffa500",
                  }}
                  source={{ uri: courseImgUrl + item.id }}
                />
                <Text style={styles.itemText2}>Center Name:{item.center}</Text>
                <Text style={styles.itemText2}> Course Name: {item.name_co}</Text>
                <Text style={styles.itemText2}>Description: {item.description}</Text>
                <Text style={styles.itemText2}>Category:{item.category}</Text>

                <Divider style={{ backgroundColor: '#dfe6e9', marginVertical:20}} />

                <Text style={styles.itemText2}>time:{Moment(item.date).format('HH:mm')}</Text>
                <Text style={styles.itemText2}>date:{Moment(item.date).format('DD/MM/Y')}</Text>
                <Text style={styles.itemText2}>Duration:{item.duration}</Text>
                <Divider style={{ backgroundColor: '#dfe6e9', marginVertical:20}} />


                <Text style={styles.time}>Rating: {item.rating}</Text>
                <Text style={styles.timee}>Price:{item.price}$</Text>
               
              </TouchableOpacity>
            </View>
          </Card>
      );
    };

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.CoursesData}
          ke
          renderItem={({ item }) => <Courses key={item.id} item={item} />}
          showsHorizontalScrollIndicator={false}
          numColumns={3}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffa500",
    borderWidth: 0,
    borderRadius: 20,
  },time:{
		fontSize:38,
		color:'#fff'
	},
	notes: {
		fontSize: 18,
		color:'#fff',
		textTransform:'capitalize'
	},

  //============
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  item: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 5,

    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  itemCategory: {
    margin: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: width * 0.035,
  },
  itemText2: {
    color: "white",
    marginTop: 5,
  },
});

export default function (props) {
  const Navigation = useNavigation();

  return <Home {...props} Navigation={Navigation} />;
}
