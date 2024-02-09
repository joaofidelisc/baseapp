import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: height * 0.03, 
  },
  texto: {
    fontSize: height * 0.02, 
    fontWeight: "bold",
    marginLeft: width * 0.03, 
    marginBottom: height * 0.015, 
  },
});
