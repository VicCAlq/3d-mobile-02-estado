/*
[ATIVIDADE DOBRA]

Crie e exporte por padrão um componente chamado "AtvDobra" que recebe um argumento "numero". 
O componente deve exibir uma <View> contendo um <Text>, que vai exibir este número recebido como argumento, 
e um <Pressable>, que ao ser clicado, modifica o valor do número para dobrar o valor dele.
*/


import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useState } from 'react'


export default function AtvDobra({numero}) {

  const [valor, setDobra] = useState(numero)

  function dobrarNumero() {
   setDobra(valor * 2)  
  }

    return(
      <View>
        <Text>
          {valor}
        </Text>
        <View>
          <Pressable onPress={() => dobrarNumero()}>
            <Text>Dobrar</Text>
          </Pressable>
        </View>
      </View>
    )
  }
  
