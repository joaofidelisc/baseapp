import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { EntradaTexto } from "../../componentes/EntradaTexto";
import estilos from "./estilos";
import Botao from "../../componentes/Botao";
import { logar } from "../../servicos/requisicoesFirebase";
import { Alerta } from "../../componentes/Alerta";
import { auth } from "../../config/firebase";
import { alteraDados, verificaEntradaVazia } from "../../utils/comum";
import { entradas } from "./entradas";

export default function Login({ navigation }) {
  const [statusError, setStatusError] = useState("");
  const [mensagemError, setMensagemError] = useState("");
  const [carregando, setCarregando] = useState(true);

  const [dados, setDados] = useState({
    email: "",
    senha: "",
  });

  useEffect(() => {
    const estadoUsuario = auth.onAuthStateChanged((usuario) => {
      if (usuario) {
        navigation.replace("Principal");
      }
      setCarregando(false);
    });
    return () => estadoUsuario();
  }, []);

  async function realizarLogin() {
    if (verificaEntradaVazia(dados, setDados)) return;
    const resultado = await logar(dados.email, dados.senha);
    if (resultado === "erro") {
      setStatusError(true);
      setMensagemError("E-mail ou senha inválidos");
      return;
    }
    navigation.replace("Principal");
  }

  if (carregando) {
    return (
      <View>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={estilos.container}>
      {entradas.map((entrada) => {
        return (
          <EntradaTexto
            key={entrada.id}
            {...entrada}
            value={dados[entrada.name]}
            onChangeText={(valor) =>
              alteraDados(entrada.name, valor, dados, setDados)
            }
            error={statusError == entrada.name}
          />
        );
      })}
      <Alerta
        mensagem={mensagemError}
        error={statusError}
        setError={setStatusError}
      />
      <Botao onPress={() => realizarLogin()}>LOGAR</Botao>
      <Botao
        onPress={() => {
          navigation.navigate("Cadastro");
        }}
      >
        CADASTRAR USUÁRIO
      </Botao>
    </View>
  );
}
