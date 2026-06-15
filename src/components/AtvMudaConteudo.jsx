/*
[ATIVIDADE MUDA CONTEÚDO]

Crie e exporte por padrão um componente chamado "AtvMudaConteudo" que não recebe nenhum argumento. 
Este componente deve exibir uma <View> com dois <Pressable> na horizontal, e abaixo destes dois botões mais uma <View>. 
Ao clicar no primeiro <Pressable>, a <View> de baixo deverá exibir um <Text> com o conteúdo "Página em construção". 
Ao clicar no segundo <Pressable>, o conteúdo dessa <View> deve ser substituído por três <View> dispostas lado a lado, 
onde cada uma destas <Views> deve ter o tamanho de 200px de altura por 200px de largura, 
a da esquerda deve ter a cor "purple", a do meio a cor "teal" e a da direita a cor "orange".
*/

import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useState } from 'react'

// Estilos de "CSS"
const estilo = StyleSheet.create({
  view: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    backgroundColor: "#303540",
    padding: "10px",
    margin: "10px",
    gap: "10px",
  },
  texto: {
    color: "#eee",
    fontSize: "32px",
  },
  textoBotao: {
    color: "#eee",
    fontSize: "16px",
  },
  botao: {
    borderRadius: "5px",
    backgroundColor: "#505560",
    padding: "10px",
    margin: "10px",
  },
  viewBotaozin: {
    display: "flex",
    flexDirection: "row",
    flex: "1 0",
    width: "200px",
    justifyContent: "center",
    alignItems: "center",
  }
})

export default function AtvMudaConteudo() {
  // Criação da variável "dobro" e da função que altera seu valor
  const [dobro, setDobro] = useState(1)

  // Funções que vão ser executadas pelos botões
  function dobrar() {
    setDobro(dobro * 2)
  }


  // Parte visual do componente
  return(
    <View style={estilo.view}>
      <Text style={estilo.texto}>
        {dobro}
      </Text>
      <View style={estilo.viewBotoes}>
        <Pressable style={estilo.botao} onPress={() => dobrar()}>
          <Text style={estilo.textoBotao}>dobrou</Text>
        </Pressable>
      </View>
    </View>
  )
}
