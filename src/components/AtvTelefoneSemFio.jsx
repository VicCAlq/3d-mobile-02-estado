/*
[ATIVIDADE TELEFONE SEM FIO]

Crie e exporte por padrão um componente chamado "AtvTelefoneSemFio" que não recebe argumentos.
Este componente deve retornar uma <View> com dois <Pressable> lado a lado, e uma <View> abaixo dos botões.
Cada <Pressable> ao ser clicado, deve inserir na <View> abaixo um <Text> e um <TextInput>, 
e substituir o conteúdo anterior dessa <View> de baixo dos botões.
O texto digitado no <TextInput> ativado por um <Pressable> deve ser exibido no <Text> do outro <Pressable>, e vice-versa.
*/

import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function AtvMudaConteudo() {
  const [conteudo, setConteudo] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.botoes}>
        <Pressable
          style={styles.botao}
          onPress={() => setConteudo('texto')}
        >
          <Text>Página</Text>
        </Pressable>

        <Pressable
          style={styles.botao}
          onPress={() => setConteudo('cores')}
        >
          <Text>Cores</Text>
        </Pressable>
      </View>

      <View style={styles.areaConteudo}>
        {conteudo === 'texto' && (
          <Text>Página em construção</Text>
        )}

        {conteudo === 'cores' && (
          <View style={styles.coresContainer}>
            <View style={[styles.quadrado, { backgroundColor: 'purple' }]} />
            <View style={[styles.quadrado, { backgroundColor: 'teal' }]} />
            <View style={[styles.quadrado, { backgroundColor: 'orange' }]} />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  botoes: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  botao: {
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
  },
  areaConteudo: {
    marginTop: 10,
  },
  coresContainer: {
    flexDirection: 'row',
  },
  quadrado: {
    width: 200,
    height: 200,
  },
});