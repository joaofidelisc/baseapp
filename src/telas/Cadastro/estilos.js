import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const baseWidth = 375;
const baseHeight = 697;

const scaleWidth = width / baseWidth;
const scaleHeight = height / baseHeight;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 25 * scaleHeight,
    paddingHorizontal: 20 * scaleWidth,
    backgroundColor: "#FFFFFF"
  },
});
