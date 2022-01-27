import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { theme } from '../global/styles/theme'

export function HomeScreen() {
  const data = [
    {
      id: 1,
      name: 'Vinicius Duarte',
      description: 'Bolo Alpino com trufas',
      weight: 2,
      deliveryHour: '14:30',
      status: 'delivered'
    },
    {
      id: 2,
      name: 'Vinicius Duarte',
      description: 'Bolo Alpino com trufas',
      weight: 2,
      deliveryHour: '16:30',
      status: 'delayed'
    },
    {
      id: 3,
      name: 'Vinicius Duarte',
      description: 'Bolo Alpino com trufas',
      weight: 2,
      deliveryHour: '16:30',
      status: 'working'
    },
    {
      id: 4,
      name: 'Vinicius Duarte',
      description: 'Bolo Alpino com trufas',
      weight: 2,
      deliveryHour: '16:30',
      status: 'working'
    },

  ]
  return (
    <View style={styles.main}>
      <View style={styles.title}>
        <Text style={styles.titleText}>
          PEDIDOS
        </Text>
        <Text style={styles.currentData}>
          24 DE JANEIRO
        </Text>
      </View>

        <ScrollView style={styles.scrollView} >
          <View style={styles.order}>
            <Text style={styles.orderName}>{(data[0].name).toUpperCase()}</Text>
            <Text style={styles.orderDescription}>{(data[0].description).toUpperCase()}</Text>
            <Text style={styles.orderDescription}>{data[0].weight} Kg</Text>
            <Text style={styles.deliveryHour}>{data[0].deliveryHour}</Text>

          </View>
        </ScrollView>

      <StatusBar style='inverted' backgroundColor='#5252A3' />
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
    height: '12%',
    marginTop: 28,//status bar tem 18px de altura
    justifyContent: 'center',
  },
  titleText: {
    color: theme.colors.purple,
    fontSize: 24,
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  currentData: {
    color: theme.colors.purple,
    fontSize: 20,
  },
  scrollView: {
    width: '90%',
    height: '100%',
    backgroundColor: 'pink',
  },
  order: {
    backgroundColor: theme.colors.green,
    width: '100%',
    height: 80,
    padding: 10,
  },
  orderName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  orderDescription: {
    fontSize: 14,
  },
  deliveryHour: {
    position: 'absolute',
    marginRight: 0,
    backgroundColor: 'red'
  }
})
