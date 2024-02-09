import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const baseWidth = 375;
const scale = width / baseWidth;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  carregandoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 32 * scale,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 20 * scale,
  },
  containerCadastro: {
    alignItems: "center",
  },
  botaoCadastro: {
    backgroundColor: "transparent",
    marginTop: 10 * scale,
  },
  textoNormal: {
    fontSize: 18 * scale,
    marginTop: 40 * scale,
  },
  textoBotaoCadastro: {
    fontSize: 18 * scale,
    color: "#A0A0A0",
    textDecorationLine: "underline",
  },
  alertaErro: {
    color: "red",
    fontSize: 14 * scale,
    marginTop: 5 * scale,
  },
});
