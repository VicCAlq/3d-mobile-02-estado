import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useState } from 'react'

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
  viewBotoes: {
    display: "flex",
    flexDirection: "row",
    flex: "1 0",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  }
})

export default function Placar() {
  const [placar, setPlacar] = useState(0)

  function marcarPonto() {
    setPlacar(placar + 1)
  }

  function perderPonto() {
    setPlacar(placar - 1)
  }

  return(
    <View style={estilo.view}>
      <Text style={estilo.texto}>
        {placar}
      </Text>
      <View style={estilo.viewBotoes}>
        <Pressable style={estilo.botao} onPress={() => marcarPonto()}>
          <Text style={estilo.textoBotao}>Mais um</Text>
        </Pressable>
        <Pressable style={estilo.botao} onPress={() => perderPonto()}>
          <Text style={estilo.textoBotao}>Menos um</Text>
        </Pressable>
      </View>
    </View>
  )
}