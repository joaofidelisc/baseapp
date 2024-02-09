import React from "react";
import { View, Text } from "react-native";
import Cabecalho from "../../componentes/Cabecalho";
import Produto from "../../componentes/Produtos";
import estilos from "./estilos";
import { auth } from "../../config/firebase";

export default function Principal({ navigation }) {
  const usuario = auth.currentUser;

  function deslogar() {
    auth.signOut();
    navigation.replace("Login");
  }

  return (
    <View style={estilos.container}>
      <Cabecalho logout={deslogar} />
      <Text style={estilos.texto}>Usuário: {usuario.email} </Text>
    </View>
  );
}
