import { StyleSheet, View, Text, ScrollView } from 'react-native'
import Feather  from 'react-native-vector-icons/Feather'

import { theme } from '../global/styles/theme'


export function HomeScreen() {

  type Data = {
    id: number,
    name: string;
    description: string;
    weight: number;
    deliveryHour: string;
    status: string;
}[];


  const data: Data = [
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
    {
      id: 5,
      name: 'Vinicius Duarte',
      description: 'Bolo Alpino com trufas',
      weight: 2,
      deliveryHour: '14:30',
      status: 'Entregue'
    },
    {
      id: 6,
      name: 'Vinicius Duarte',
      description: 'Bolo Alpino com trufas',
      weight: 2,
      deliveryHour: '16:30',
      status: 'Atrasado'
    },
    {
      id: 7,
      name: 'Vinicius Duarte',
      description: 'Bolo Alpino com trufas',
      weight: 2,
      deliveryHour: '16:30',
      status: 'Aguardando'
    },
    {
      id: 8,
      name: 'Vinicius Duarte',
      description: 'Bolo Alpino com trufas',
      weight: 2,
      deliveryHour: '16:30',
      status: 'Aguardando'
    },
  ]

  const statusColor: any = {
    'Aguardando': `${theme.colors.lightPurple}`,
    'Atrasado': `${theme.colors.red}`,
    'Entregue': `${theme.colors.green}`
  }

  return (
    <View style={styles.main}>
      <View style={styles.title}>
        <Text style={styles.titleText}>
          PEDIDOS
        </Text>
      </View>
      <View style={styles.dates}>
      <Text style={styles.currentDate}>
        24 DE JANEIRO
      </Text>
      <Text style={styles.nextDate}>
        25/02
      </Text>

      </View>
      <ScrollView style={styles.scrollView} >
        {data.map(data => {
          return (
            <View
              key={data.id}
              style={[styles.order, {backgroundColor: `${statusColor[data.status]}`} ]}
            >
              <Text style={styles.orderName}>{(data.name).toUpperCase()}</Text>
              <Text style={styles.orderDescription}>{(data.description).toUpperCase()}</Text>
              <Text style={styles.orderDescription}>{data.weight} Kg</Text>
              <View style={styles.deliveryHour}>
                <Feather name='clock' size={14} >
                  <Text>  {data.deliveryHour}</Text>
                </Feather>
              </View>
              <Text style={styles.orderStatus}>{data.status.toUpperCase()}</Text>
            </View>
          )
        })}

      </ScrollView>
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
    backgroundColor: 'pink',
    width: '90%',
    height: '8%',
    marginTop: 18,//status bar tem 18px de altura
    justifyContent: 'center',
  },
  titleText: {
    color: theme.colors.purple,
    fontSize: 28,
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  dates: {
    padding: 12,
  },
  currentDate: {
    backgroundColor: 'red',
    color: theme.colors.purple,
    fontSize: 20,
    alignSelf: 'stretch'
  },
  nextDate: {

  },
  scrollView: {
    width: '90%',
    height: '100%',
  },
  order: {
    backgroundColor: theme.colors.lightPurple,
    width: '100%',
    height: 80,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10
  },
  orderOrange: {
    backgroundColor: theme.colors.green,
    width: '100%',
    height: 80,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10
  },
  orderRed: {
    backgroundColor: theme.colors.green,
    width: '100%',
    height: 80,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10
  },
  orderGreen: {
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
