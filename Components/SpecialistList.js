import * as React from "react";

import { Button, Input } from "react-native-elements";
import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import   { Component } from "react";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
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
  getcourse() {
    fetch("http://192.168.1.106:3000/api/course", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
   
      }
    })
    .then(res=>res.json()).then(respJson=>{
    
      this.setState({
        
      
        CoursesData: respJson.course
      });
      console.log(this.state.CoursesData)
      this.setState({
        
        loading:false
      });
      console.log(this.state.loading)

    })

  }

   componentDidMount(){
    
    this.getcourse();

  
   }


  render (){
    const { navigation } = this.props;

   const Courses = ({ item }) => {

      return (
        <View style={styles.item}>


        <View style={styles.itemCategory}>
          <TouchableOpacity  >
          
          <Text style={styles.itemText2}> {item.NAME_CO}</Text>
          <Text style={styles.itemText2}> {item.DESCRIPTION}</Text>
          <Text style={styles.itemText2}> {item.RAITING}</Text>
          <Text style={styles.itemText2}> {item.NAME_CO}</Text>
          <Text style={styles.itemText2}> {item.NAME_CO}</Text>
          
          
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