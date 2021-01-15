import * as React from "react"
import  {courseImgUrl} from "./config/imghttp";
import { Button, Input } from "react-native-elements";
import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import   { Component } from "react";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import accesClient from "./config/accesClient";
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
  arrayBufferToBase64 = buffer => {
    let binary = '';
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.ntoa(binary);
  };
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
          
          <Text style={styles.itemText2}>Course Name: {item.name_co}</Text>
          <Text style={styles.itemText2}>Description: {item.description}</Text>
          <Text style={styles.itemText2}>Category:{item.duration}</Text>
          <Text style={styles.itemText2}>Rating:{item.rating}</Text>
          <Text style={styles.itemText2}>Duration:{item.duration}</Text>
        

          <Text style={styles.itemText2}>Rating: {item.raiting}</Text>
          <Text style={styles.itemText2}>Price:{item.price}$</Text>

      
          
          <Image
                style={{
                  width: 200,
                  height: 200,
                  resizeMode: 'cover',
                  backgroundColor: 'yellow',
                  
                }}
             source = {{uri:courseImgUrl+item.id}}

                
            />
          
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