/*
[ATIVIDADE MUDA CONTEÚDO]

Crie e exporte por padrão um componente chamado "AtvMudaConteudo" que não recebe nenhum argumento. 
Este componente deve exibir uma <View> com dois <Pressable> na horizontal, e abaixo destes dois botões mais uma <View>. 
Ao clicar no primeiro <Pressable>, a <View> de baixo deverá exibir um <Text> com o conteúdo "Página em construção". 
Ao clicar no segundo <Pressable>, o conteúdo dessa <View> deve ser substituído por três <View> dispostas lado a lado, 
onde cada uma destas <Views> deve ter o tamanho de 200px de altura por 200px de largura, 
a da esquerda deve ter a cor "purple", a do meio a cor "teal" e a da direita a cor "orange".
*/

import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

export default function AtvMudaConteudo() {
  const [modo, setModo] = useState('texto');

  return (
    <View style={{ flex: 1, padding: 20 }}>

      {/* Botões lado a lado */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

        <Pressable
          onPress={() => setModo('texto')}
          style={{
            backgroundColor: '#ddd',
            padding: 10,
            flex: 1,
            marginRight: 5,
            alignItems: 'center'
          }}
        >
          <Text>Texto</Text>
        </Pressable>

        <Pressable
          onPress={() => setModo('cores')}
          style={{
            backgroundColor: '#ddd',
            padding: 10,
            flex: 1,
            marginLeft: 5,
            alignItems: 'center'
          }}
        >
          <Text>Cores</Text>
        </Pressable>

      </View>

      {/* Conteúdo abaixo */}
      <View style={{ marginTop: 20, alignItems: 'center' }}>

        {modo === 'texto' ? (
          <Text>Página em construção</Text>
        ) : (
          <View style={{ flexDirection: 'row' }}>

            <View
              style={{
                width: 200,
                height: 200,
                backgroundColor: 'purple'
              }}
            />

            <View
              style={{
                width: 200,
                height: 200,
                backgroundColor: 'white'
              }}
            />

            <View
              style={{
                width: 200,
                height: 200,
                backgroundColor: 'orange'
              }}
            />

          </View>
        )}

      </View>

    </View>
  );
}
