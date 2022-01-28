import { View, StyleSheet, Text} from 'react-native'
import { theme } from '../global/styles/theme'

export function Balance () {
  return (
    <View style={styles.main} >
      <View style={styles.title} >
        <Text style={styles.titleText} >
          SALDO
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
  title: {
    width: '90%',
    height: '10%',
    marginTop: 18,//status bar tem 18px de altura
    justifyContent: 'center',
  },
  titleText: {
    color: theme.colors.purple,
    fontSize: 28,
    justifyContent: 'center',
    fontWeight: 'bold',
  },
})
