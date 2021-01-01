import * as React from "react";

import { Text, View } from "react-native";

import Home from "./Components/home";
import Login from "./Components/Login";
import LoginSelection from "./Components/LoginSelection";
import { NavigationContainer } from "@react-navigation/native";
import Tab from "./Components/Tabs";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function App() {
  Const SpecialiatList=() =>return(<></>)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="LoginSelection"
          component={LoginSelection}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignUp"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomePage"
          component={Tab}
        />
          <Stack.Screen
          options={{ headerShown: false }}
          name="SpecialistList"
          component={SpecialistList}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
