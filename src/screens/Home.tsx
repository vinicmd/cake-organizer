import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Feather  from 'react-native-vector-icons/Feather'

import { theme } from '../global/styles/theme'


export function HomeScreen() {
  const data = [
    {
      id: 1,
      name: 'Vinicius Duarte',
      description: 'Bolo Alpino com trufas',
      weight: 2,
      deliveryHour: '14:30',
      status: 'Entregue'
    },
    {
      id: 2,
      name: 'Vinicius Duarte',
      description: 'Bolo Alpino com trufas',
      weight: 2,
      deliveryHour: '16:30',
      status: 'Atrasado'
    },
    {
      id: 3,
      name: 'Vinicius Duarte',
      description: 'Bolo Alpino com trufas',
      weight: 2,
      deliveryHour: '16:30',
      status: 'Aguardando'
    },
    {
      id: 4,
      name: 'Vinicius Duarte',
      description: 'Bolo Alpino com trufas',
      weight: 2,
      deliveryHour: '16:30',
      status: 'Aguardando'
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
          {data.map(data => {
            return (
              <View style={styles.order} key={data.id} >
                <Text style={styles.orderName}>{(data.name).toUpperCase()}</Text>
                <Text style={styles.orderDescription}>{(data.description).toUpperCase()}</Text>
                <Text style={styles.orderDescription}>{data.weight} Kg</Text>
                <View style={styles.deliveryHour}>
                  <Feather name='clock' size={14} >
                    <Text>{data.deliveryHour}</Text>
                  </Feather>
                </View>
                <Text style={styles.orderStatus}>{data.status.toUpperCase()}</Text>
              </View>
            )

          })}

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
  },
  order: {
    backgroundColor: theme.colors.green,
    width: '100%',
    height: 80,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10
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
    right: 10,
    top: 20,
  },
  orderStatus: {
    fontSize: 14,
    position: 'absolute',
    right: 10,
    bottom: 20,
  }
})
