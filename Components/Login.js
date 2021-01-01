import * as React from "react";

import { Button, Input } from "react-native-elements";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("screen");

function Login() {
  const navigation = useNavigation();
  return (
    <>
      <ImageBackground
        source={{
          uri:
            "https://compote.slate.com/images/ad27ef8a-0ea1-46b7-b515-415c4af18528.jpg?width=960",
        }}
        style={styles.image}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image source={require("../assets/formini.png")} />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: width * 0.1,
          }}
        >
          <Input
            placeholder="E-mail"
            label={"Email"}
            labelStyle={{ color: "white" }}
            inputStyle={{ backgroundColor: "white", borderRadius: 10 }}
            onPress={() => navigation.navigate("HomePage")}
          />

          <Input
            placeholder="Password"
            label={"Password"}
            labelStyle={{ color: "white" }}
            secureTextEntry={true}
            inputStyle={{ backgroundColor: "white", borderRadius: 10 }}
          />
          <Button
            title="Connexion"
            buttonStyle={{
              width: width * 0.5,
              backgroundColor: "white",
              borderRadius: 30,
            }}
            titleStyle={{ color: "orange", alignSelf: "center" }}
            onPress={() => navigation.navigate("Login")}
            onPress={() => navigation.navigate("HomePage")}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            icon={{
              name: "facebook",
              size: 35,
              color: "white",
            }}
            buttonStyle={{
              width: width * 0.5,
              alignSelf: "center",
              backgroundColor: "white",
              borderRadius: 30,
              backgroundColor: "#385898",
            }}
            titleStyle={{ color: "white" }}
            title="Login with facebook"
            onPress={() => navigation.navigate("HomePage")}
          />

          <Button
            icon={{
              name: "mail",
              size: 35,
              color: "red",
            }}
            buttonStyle={{
              width: width * 0.5,
              alignSelf: "center",
              borderRadius: 30,
              backgroundColor: "white",
              marginTop: 20,
            }}
            titleStyle={{ color: "black" }}
            title="Login with gmail"
            onPress={() => navigation.navigate("HomePage")}
          />
        </View>
      </ImageBackground>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,

    height: height,
    width: width,
    resizeMode: "contain",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Login;
