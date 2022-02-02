import { View, StyleSheet, Text} from 'react-native'
import { Title } from '../components/Title'
import { theme } from '../global/styles/theme'

export function Contacts () {
  return (
    <View style={styles.main} >
      <Title>
        Contatos
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

})
