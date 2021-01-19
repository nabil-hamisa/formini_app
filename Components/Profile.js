import * as React from "react";

import { Appbar, Avatar, Searchbar } from "react-native-paper";
import { Button, Input } from "react-native-elements";
import { userImgUrl } from "./config/imghttp";
import {
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { height, width } = Dimensions.get("screen");

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user:[]
    };
  }
  getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      return null
    }
  }
  doSignout=()=>{
    AsyncStorage.removeItem('user');
    this.props.navigation.navigate("Login");
  }

 async componentDidMount() {
  var logged =await this.getData('user')
    logged?null:this.props.navigation.navigate("Login");
    console.log(logged);
    await this.setState({user:logged[0]})
    console.log(this.state.user);
  }
  render(props) {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.header}></View>

          <Image
            style={styles.avatar}
            source={{
              uri:userImgUrl + this.state.user.id}}
          />
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{this.state.user.first_name}</Text>
              <Text style={styles.name}>{this.state.user.last_name}</Text>
              <Text style={styles.info}>{this.state.user.mail}</Text>
              <Text style={styles.info}>{this.state.user.profession}</Text>

              <TouchableOpacity onPress={this.doSignout}  style={styles.buttonContainer}>
                <Text>Disconnect</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#000000",
    height: 200,
    borderBottomWidth: 5,
    borderBottomColor: "orange",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130,
    borderColor: "orange",
  },

  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "orange",
    fontWeight: "600",
  },
  info: {
    fontSize: 16,
    color: "#3c3c3c",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#3c3c3c",
    marginTop: 10,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "orange",
  },
});
export default Profile;
