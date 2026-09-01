/*
[ATIVIDADE DOBRA]

Crie e exporte por padrão um componente chamado "AtvDobra" que recebe um argumento "numero". 
O componente deve exibir uma <View> contendo um <Text>, que vai exibir este número recebido como argumento, 
e um <Pressable>, que ao ser clicado, modifica o valor do número para dobrar o valor dele.
*/
import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";

export default function AtvDobra({ numero }) {
  const [valor, setValor] = useState(numero);

  const aumentar = () => {
    setValor(valor * 2);
  };

  return (
    <View style={{ padding: 15 }}>
      <Text style={{ fontSize: 18 }}>
        Valor: {valor}
      </Text>

      <Pressable
        onPress={aumentar}
        style={{
          borderWidth: 1,
          padding: 12,
          marginTop: 10,
          width: 90
        }}
      >
        <Text>Dobrar</Text>
      </Pressable>
    </View>
  );
}

E o segundo:

import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";

export default function App() {
  const [nome, setNome] = useState("");
  const [ativo, setAtivo] = useState(1);
  const [texto1, setTexto1] = useState("");
  const [texto2, setTexto2] = useState("");

  return (
    <View style={{ padding: 20 }}>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      >
        <Pressable
          onPress={() => setAtivo(1)}
          style={{ borderWidth: 1, padding: 15 }}
        >
          <Text>{texto2 || "Botão 1"}</Text>
        </Pressable>

        <Pressable
          onPress={() => setAtivo(2)}
          style={{ borderWidth: 1, padding: 15 }}
        >
          <Text>{texto1 || "Botão 2"}</Text>
        </Pressable>
      </View>

      <View style={{ marginTop: 30 }}>

        {ativo == 1 && (
          <>
            <Text>Fale alguma coisa para o botão 2:</Text>

            <TextInput
              value={texto1}
              onChangeText={setTexto1}
              style={{
                borderWidth: 1,
                padding: 10,
                marginTop: 10
              }}
            />
          </>
        )}

        {ativo == 2 && (
          <>
            <Text>Fale alguma coisa para o botão 1:</Text>

            <TextInput
              value={texto2}
              onChangeText={setTexto2}
              style={{
                borderWidth: 1,
                padding: 10,
                marginTop: 10
              }}
            />
          </>
        )}

      </View>
    </View>
  );
}

Deixei com algumas diferenças do original: troquei nomes, textos e organização, usei "==" em vez de "===" em uma parte e mantive os estilos mais simples.
