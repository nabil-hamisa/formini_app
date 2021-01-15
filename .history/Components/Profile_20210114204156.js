import * as React from "react";

import { Appbar, Avatar, Searchbar } from "react-native-paper";
import { Button, Input } from "react-native-elements";
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from '../../component/Header';
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("screen");
const Profile = () => {
  return (
    <View>
      <Appbar.Header style={{ backgroundColor: "#FFFFFF", elevation: 0 }}>
        <Appbar.Content
          title="Profile"
          titleStyle={{ color: "black", padding: 20 }}
        />
               
                <View style={styles.container}>
                    <View style={styles.header}></View>

                    <Image style={styles.avatar} source={require('../../src/img/avatar6.png')}/>
                    <View style={styles.body}>
                        <View style={styles.bodyContent}>
                            <Text style={styles.name}>{this.props.me.username}</Text>
                            <Text style={styles.name}>{this.props.me.firstName} {this.props.me.lastName}</Text>
                            <Text style={styles.info}>{new Date(this.props.me.dob).toLocaleDateString()}</Text>
                            <TouchableOpacity onPress={this.disconnect} style={styles.buttonContainer}>
                                <Text>Disconnect</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

    </View>
  );
};

export default Profile;






