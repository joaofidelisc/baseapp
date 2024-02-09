import React from "react";
import { View, Text } from "react-native";
import estilos from "./estilos";
import { auth } from "../../config/firebase";
import Botao from "../../componentes/Botao";

export default function Principal({ navigation }) {
  const usuario = auth.currentUser;

  function deslogar() {
    auth.signOut().then(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    });
  }

  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>Usuário: {usuario.email} </Text>
      <Botao onPress={() => deslogar()}>Sair</Botao>
    </View>
  );
}
