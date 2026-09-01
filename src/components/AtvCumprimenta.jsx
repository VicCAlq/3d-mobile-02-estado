ATIVIDADE CUMPRIMENTA]

Crie e exporte por padrão um componente chamado "AtvCumprimenta". Este componente não recebe nenhum argumento. 
Ele deve retornar uma <View>, onde dentro dela haverá um <Text> com o conteúdo "Olá, qual seu nome?". 
Abaixo deste <Text> deve haver um <TextInput> onde o usuário poderá digitar seu nome. 
Ao lado deste <TextInput> deve haver um <Pressable>, que ao ser apertado vai fazer um <Text> ser exibido abaixo 
com o texto "É um prazer lhe conhecer, [NOME]", onde [NOME] deve ser igual ao texto que o usuário digitou no <TextInput>.

Ordem visual dos elementos:

_________________________________
|       Olá, qual seu nome?     |
|                               |
|  ________________  ________   |
| | Nome aqui     | | Salvar |  |
| ----------------  ---------   |
|                               |
| É um prazer lhe conhecer...   |
|_______________________________|
*/
import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";

export default function AtvCumprimenta() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  const mostrarNome = () => {
    setMensagem("É um prazer lhe conhecer, " + nome);
  };

  return (
    <View style={{ padding: 15 }}>
      <Text style={{ fontSize: 18, marginBottom: 15 }}>
        Olá, qual seu nome?
      </Text>

      <View style={{ flexDirection: "row" }}>
        <TextInput
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={(texto) => setNome(texto)}
          style={{
            borderWidth: 1,
            borderColor: "gray",
            width: 180,
            padding: 8,
            marginRight: 8
          }}
        />

        <Pressable
          onPress={mostrarNome}
          style={{
            backgroundColor: "purple",
            padding: 10,
            borderRadius: 4
          }}
        >
          <Text style={{ color: "white" }}>Salvar</Text>
        </Pressable>
      </View>

      {mensagem && (
        <Text style={{ marginTop: 15 }}>
          {mensagem}
        </Text>
      )}
    </View>
  );
  }
