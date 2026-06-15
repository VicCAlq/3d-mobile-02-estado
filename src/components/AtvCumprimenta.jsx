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
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export default function AtvCumprimenta() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  const lidarComPressao = () => {
    setMensagem(`É um prazer lhe conhecer, ${nome}`);
  };

  return (
    <View style={styles.container}>
      <Text>Olá, qual seu nome?</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome aqui"
          onChangeText={setNome}
          value={nome}
        />
        <Pressable style={styles.botao} onPress={lidarComPressao}>
          <Text>Salvar</Text>
        </Pressable>
      </View>

      {mensagem !== '' && <Text>{mensagem}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  input: {
    borderBottomWidth: 1,
    marginRight: 10,
    flex: 1,
  },
  botao: {
    borderWidth: 1,
    padding: 5,
  },
});