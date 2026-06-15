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

import {View, Text, Pressable, TextInput ,StyleSheet} from 'react-native';
import { useState } from 'react';

const estilo = StyleSheet.create({
    view: {
        alignItems: "center",
        justifyContent: "center",
    },
    texto: {
        color: 'purple',
        fontSize: '30px',
        backgroundColor: 'pink',
        borderRadius: '30%',
    },
    input: {
        backgroundColor: 'white',
        margin: '5px',
        border: '5px solid blue',
        borderRadius: '30%'
    },
    press: {
        
    },
    textoPress: {
        color: 'blue',
        fontSize: '30px',
        backgroundColor: 'pink',
        borderRadius: '30%',
    },
    textoResposta: {
        
    }

    })

export default function AtvCumprimenta(){
    const [textoInserido, setTextoInserido] = useState("")
    const [texto, setTexto] = useState("Olá, qual seu nome?")

    return(
        <View style = {estilo.view}>
            <Text style = {estilo.texto}>
                {texto}
            </Text>
            <TextInput
                style = {estilo.input}
                value = {textoInserido}
                onChangeText = {setTextoInserido}
                placeholder = "Nome aqui"
            />
            <Pressable style = {estilo.press} onPress = {() => setTexto(textoInserido)}>
                <Text style = {estilo.textoPress}>Salvar</Text>
            </Pressable>
            <Text style = {estilo.textoResposta}>
                {setTexto}
            </Text>
        </View>
    )
}
