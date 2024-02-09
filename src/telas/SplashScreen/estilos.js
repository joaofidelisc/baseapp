import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const baseWidth = 375; 
const scaleWidth = width / baseWidth;
const scaleHeight = height / baseWidth; 

export default StyleSheet.create({
  animationContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4caf50",
    padding: 20 * scaleHeight,
  },
  textoTitulo: {
    fontWeight: "bold",
    color: "white",
    fontSize: height * 0.04,
    textAlign: "center",
    marginTop: 10 * scaleHeight,
  },
  textoSlogan: {
    fontWeight: "bold",
    color: "white",
    fontSize: height * 0.03,
    textAlign: "center",
    marginTop: 20 * scaleHeight,
  },
});
