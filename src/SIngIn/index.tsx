import { useState } from "react"
import { View, Text, TextInput } from "react-native"

import { styles } from "./style"

export function SingIn () {

  const [ text, useText ] = useState('')

  return (
    <View style={styles.container}>
      <Text>Salve</Text>
      <TextInput style={styles.input} onChangeText={useText} />
      <Text>{text}</Text>
    </View>
  )
}