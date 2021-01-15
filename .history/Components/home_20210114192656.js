import * as React from "react"

import { Button, Input } from "react-native-elements";
import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import   { Component } from "react";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import accesClient from "./accesClient";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("screen");

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading:true,
      CoursesData: ''
    };
  }
  async getcourse() {
    await accesClient.get("/course")
    .then(res=>{
      console.log(res.data.course
        );
      this.setState({
        CoursesData: res.data.course
      });
    })
  }
   componentDidMount(){
    
    this.getcourse();
    console.log(this.state.CoursesData);

  
   }


  render (){
    const { navigation } = this.props;

   const Courses = ({ item }) => {

      return (
        <View style={styles.item}>


        <View style={styles.itemCategory}>
          <TouchableOpacity  >
          
          <Text style={styles.itemText2}> {item.name_co}</Text>
          <Text style={styles.itemText2}> {item.description}</Text>
          <Text style={styles.itemText2}> {item.raiting}</Text>
          
          
          
          </TouchableOpacity>
          
        
          </View>

        </View>
      );
    };

  
  return (
  
      <View style={styles.container}>
        
          <FlatList 
        
        data={this.state.CoursesData}
        renderItem={({ item }) => <Courses item={item} />}
        showsHorizontalScrollIndicator={false}
        numColumns={3}
      /> 
      
      </View>
    
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  item: {
    flex : 1 ,
    marginVertical: 10,
    marginHorizontal: 5,

    borderRadius : 5 ,
     flexDirection: 'row',
    justifyContent: 'space-around',


  },
  itemCategory: {
    margin: 10,
    borderRadius : 5 ,
     flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal:width*0.035

  },
  itemText2: {
    color: 'grey',
    marginTop: 5,
  },


});

export default function(props) {
  const Navigation = useNavigation();

  return <Home {...props} Navigation={Navigation} />;
}