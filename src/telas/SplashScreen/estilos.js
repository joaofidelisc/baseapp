import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");

export default StyleSheet.create({
  animationContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FC6011",
    padding: 20,
  },
  textContainer: {
    fontWeight: "bold",
    color: "white",
    fontSize: height * 0.04,
    textAlign: "center",
    marginTop: 10,
  },
});
