import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Dimensions, Text } from "react-native";
import LottieView from "lottie-react-native";
import estilos from "./estilos";

const { width, height } = Dimensions.get("screen");

export default function SplashScreen({ navigation }) {
  return (
    <View style={estilos.animationContainer}>
      <Text style={estilos.textContainer}> Diversificare </Text>
      <LottieView
        style={{ height: height * 0.45, width: width * 0.45 }}
        source={require("../../../lotties/splashscreen.json")}
        autoPlay
        autoSize={false}
        loop={false}
        speed={1}
        onAnimationFinish={() => navigation.navigate("Login")}
      />
      <StatusBar style="light" />
    </View>
  );
}
