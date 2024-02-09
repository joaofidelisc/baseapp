import React from "react";
import { Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Feather";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get("window");

import SplashScreen from "./telas/SplashScreen";
import Login from "./telas/Login";
import Cadastro from "./telas/Cadastro";
import Principal from "./telas/Principal";

function RotaPrivada() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          bottom: height * 0.02,
          height: height * 0.08,
          width: width * 0.9,
          alignSelf: "center",
          borderRadius: 10,
        },
        tabBarActiveTintColor: "#4CAF50",
        tabBarInactiveTintColor: "#9E9E9E",
        tabBarLabelStyle: {
          fontSize: height * 0.015,
          marginBottom: 5,
        },
      }}
    >
      <Tab.Screen
        name="Investir"
        component={Principal}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="activity" color={color} size={height * 0.03} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Principal}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="list" color={color} size={height * 0.03} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Principal}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={height * 0.03} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Rotas() {
  return (
    <NavigationContainer>
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
