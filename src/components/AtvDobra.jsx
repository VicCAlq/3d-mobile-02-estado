/*
[ATIVIDADE DOBRA]

Crie e exporte por padrão um componente chamado "AtvDobra" que recebe um argumento "numero". 
O componente deve exibir uma <View> contendo um <Text>, que vai exibir este número recebido como argumento, 
e um <Pressable>, que ao ser clicado, modifica o valor do número para dobrar o valor dele.
*/

import { View, Text, Pressable } from "react-native";
import { useState } from 'react'

export default function AtvDobra(numero) {
  const [nmr, setNmr] = useState(1)
  const dobrar = () => {
    setNmr(nmr * 2)
  }

  return(
    <View>
      <Text>{nmr}</Text>
      <Pressable onPress={dobrar}>
        <Text>Dobrar</Text>
      </Pressable>
    </View>
  )
}