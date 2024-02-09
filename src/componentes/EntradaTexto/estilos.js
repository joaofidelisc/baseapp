import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const baseWidth = 375; 
const scaleWidth = width / baseWidth;

export default StyleSheet.create({
  input: {
    height: 50 * scaleWidth,
    width: "90%",
    paddingHorizontal: 10 * scaleWidth, 
    marginTop: 10 * scaleWidth,
    backgroundColor: "#FFFFFF",
  }
});
