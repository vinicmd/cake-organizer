import { View, StyleSheet, Text} from 'react-native'
import { Loading } from '../components/Loading'
import { Title } from '../components/Title'

export function Balance () {
  return (
    <View style={styles.main}>
      <Title>
        Saldo
      </Title>

      <Loading />
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
