import { View, StyleSheet, Text} from 'react-native'
import { Title } from '../components/Title'

import { theme } from '../global/styles/theme'
import { titleStyles } from '../global/styles/titleconfig'

export function AddOrder () {
  return (
    <View style={styles.main}>
      <Title>
        Adicionar Pedido
      </Title>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  title: {
    width: '90%',
    height: '7%',
    marginTop: 18,//status bar tem 18px de altura
    paddingTop: 15,
  },
  titleText: {
    color: theme.colors.purple,
    fontSize: 28,
    justifyContent: 'center',
    fontWeight: 'bold',
  },
})
