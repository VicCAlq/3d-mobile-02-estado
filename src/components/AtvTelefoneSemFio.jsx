/*
[ATIVIDADE TELEFONE SEM FIO]

Crie e exporte por padrão um componente chamado "AtvTelefoneSemFio" que não recebe argumentos.
Este componente deve retornar uma <View> com dois <Pressable> lado a lado, e uma <View> abaixo dos botões.
Cada <Pressable> ao ser clicado, deve inserir na <View> abaixo um <Text> e um <TextInput>, 
e substituir o conteúdo anterior dessa <View> de baixo dos botões.
O texto digitado no <TextInput> ativado por um <Pressable> deve ser exibido no <Text> do outro <Pressable>, e vice-versa.
*/



import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native'
import { useState } from 'react'

export default function AtvTelefoneSemFio(){
   
    const [textoInserido, setTextoInserido] = useState("")
    const [texto, setTexto] = useState("jkjkjkj")

}


return(
    <View>
        <Pressable>
        onChangeText={setTextoInserido}
        placeholder="Digite aqui o novo texto"
        </Pressable>
         <Pressable>
         onChangeText={setTextoInserido}
        placeholder="Digite aqui o novo texto"
        </Pressable>
        <View>
        
    </View>
    </View>
)