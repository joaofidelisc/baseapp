import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import SplashScreen from "./telas/SplashScreen";
import Login from "./telas/Login";
import Cadastro from "./telas/Cadastro";
import Principal from "./telas/Principal";

function RotaPrivada() {
  return (
    <Tab.Navigator initialRouteName="Principal">
      <Tab.Screen name="Principal" component={Principal} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}

function Rotas() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen
          name="Principal"
          component={RotaPrivada}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Rotas;
