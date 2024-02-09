import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const baseWidth = 375; 
const scaleWidth = width / baseWidth;
const scaleHeight = height / baseWidth; 

export default StyleSheet.create({
  botao: {
    height: 25 * scaleHeight, 
    width: "90%", 
    borderRadius: 10, 
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20 * scaleHeight, 
  },
  textoBotao: {
    fontSize: 15 * scaleWidth,
    fontFamily: "Roboto",
    fontWeight: "700",
    color: "#FFFFFF",
  }
});
