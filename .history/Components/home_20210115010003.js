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
            style={{flexDirection:'row-reverse',alignItems:'center'}}
            >
              <TouchableOpacity>
              <Image
              style={styles.image}
                
                  source={{ uri: courseImgUrl + item.id }}
                />
                <Text style={styles.notes}>Center Name:{item.center}</Text>
                <Text style={styles.notes}>Course Name: {item.name_co}</Text>
                <Text style={styles.notes}>Description: {item.description}</Text>
                <Text style={styles.notes}>Category:{item.category}</Text>

                <Divider style={{ backgroundColor: '#dfe6e9', marginVertical:20}} />

                <Text style={styles.notes}>date:{Moment(item.date).format('DD/MM/Y')}</Text>
                <Text style={styles.notes}>time:{Moment(item.date).format('HH:mm')}</Text>
                <Text style={styles.notes}>Duration:{item.duration}</Text>
                <Divider style={{ backgroundColor: '#dfe6e9', marginVertical:20}} />


                <Text style={styles.notes}>Rating: {item.rating}</Text>
                <Text style={styles.time}>Price:{item.price}$</Text>
               
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ffa500",
    marginTop:50,
    borderWidth: 0,
    borderRadius: 20,
    flex:1,
  },time:{
    marginLeft:200,
    textAlign: 'right',
		fontSize:25,
		color:'black'
	},
	notes: {
		fontSize: 20,
		color:'#fff',
    textTransform:'capitalize',
	},image:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    borderRadius: 100,
    resizeMode: "cover",
    backgroundColor: "#ffa500",
  },

  //============
});

export default function (props) {
  const Navigation = useNavigation();

  return <Home {...props} Navigation={Navigation} />;
}
