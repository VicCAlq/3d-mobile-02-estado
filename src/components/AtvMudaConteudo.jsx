/*
[ATIVIDADE MUDA CONTEÚDO]

Crie e exporte por padrão um componente chamado "AtvMudaConteudo" que não recebe nenhum argumento. 
Este componente deve exibir uma <View> com dois <Pressable> na horizontal, e abaixo destes dois botões mais uma <View>. 
Ao clicar no primeiro <Pressable>, a <View> de baixo deverá exibir um <Text> com o conteúdo "Página em construção". 
Ao clicar no segundo <Pressable>, o conteúdo dessa <View> deve ser substituído por três <View> dispostas lado a lado, 
onde cada uma destas <Views> deve ter o tamanho de 200px de altura por 200px de largura, 
a da esquerda deve ter a cor "purple", a do meio a cor "teal" e a da direita a cor "orange".
*/
import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";

export default function AtvMudaConteudo() {
  const [pagina, setPagina] = useState("");

  return (
    <View style={{ padding: 20 }}>

      <View style={{ flexDirection: "row" }}>
        <Pressable
          onPress={() => setPagina("um")}
          style={{ borderWidth: 1, padding: 10 }}
        >
          <Text>Página 1</Text>
        </Pressable>

        <Pressable
          onPress={() => setPagina("dois")}
          style={{ borderWidth: 1, padding: 10, marginLeft: 10 }}
        >
          <Text>Página 2</Text>
        </Pressable>
      </View>

      <View style={{ marginTop: 20 }}>

        {pagina === "um" && (
          <Text>Página em construção</Text>
        )}

        {pagina === "dois" && (
          <View style={{ flexDirection: "row" }}>

            <View
              style={{
                width: 200,
                height: 200,
                backgroundColor: "purple"
              }}
            />

            <View
              style={{
                width: 200,
                height: 200,
                backgroundColor: "teal"
              }}
            />

            <View
              style={{
                width: 200,
                backgroundColor: "orange"
              }}
            />

          </View>
        )}

      </View>
    </View>
  );
}
