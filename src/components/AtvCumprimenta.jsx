/*
[ATIVIDADE CUMPRIMENTA]

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
    

import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

export default function AtvCumprimenta() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  return (
    <View>
      <Text>Olá, qual o seu nome?</Text>

      <View style={{ flexDirection: 'row' }}>
        <TextInput
          placeholder="Nome aqui"
          value={nome}
          onChangeText={setNome}
          style={{
            borderWidth: 1,
            width: 150,
            marginRight: 10
          }}
        />

        <Pressable
          onPress={() => {
            setMensagem('É um prazer lhe conhecer, ' + nome);
          }}
          style={{
            borderWidth: 1,
            padding: 10
          }}
        >
          <Text>Salvar</Text>
        </Pressable>
      </View>

      <Text style={{ marginTop: 10 }}>
        {mensagem}
      </Text>
    </View>
  );
}
