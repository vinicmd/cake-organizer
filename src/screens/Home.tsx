import moment from 'moment';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, RefreshControl } from 'react-native'
import Feather  from 'react-native-vector-icons/Feather'
import { Loading } from '../components/Loading';
import { Title } from '../components/Title';
import { theme } from '../global/styles/theme'

import api from '../services/api';

interface OrderItem {
  id: number
  name: string
  cakeDescription: string
  weight: number
  deliveryHour: string
  status: string
}

const months: any = {
  "01": "JANEIRO",
  "02": "FEVEREIRO",
  "03": "MARÇO",
  "04": "ABRIL",
  "05": "MAIO",
  "06": "JUNHO",
  "07": "JULHO",
  "08": "AGOSTO",
  "09": "SETEMBRO",
  "10": "OUTUBRO",
  "11": "NOVEMBRO",
  "12": "DEZEMBRO",
}



export function HomeScreen({navigation} : any) {


  const date = moment().format('DD [de] MMMM [de] YYYY')

  const [orders, setOrders ] = useState<OrderItem[]>([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)

  function getOrders () {
    api.get('orders').then(response => {
      setOrders(response.data)
      setLoading(false)
      setRefreshing(false)
    })
  }

  const onRefresh = () => {
    setRefreshing(true)
    setLoading(true)
    setOrders([])
    getOrders()
  }

  useEffect(() => {
    api.get('orders').then(response => {
      setOrders(response.data)
      setLoading(false)
    })
  }, [])

  const statusColor: any = {
    'Aguardando': `${theme.colors.lightPurple}`,
    'Cancelado': `${theme.colors.red}`,
    'Atrasado': `${theme.colors.orange}`,
    'Entregue': `${theme.colors.green}`
  }

  function handleNavigateOrderDetail (id: number) {
    navigation.navigate('OrderDetail', { id })
  }

  if (loading) {
    return <Loading />
  }

  return (
    <View style={styles.main}>
      <Title>
        PEDIDOS
      </Title>

      <View style={styles.dates}>
        <Text style={styles.currentDate}>
          {date}
        </Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >

        {orders.map(order => {
          return (
            <TouchableOpacity
              key={order.id}
              style={[styles.order, {backgroundColor: `${statusColor[order.status]}`} ]}
              onPress={ () => handleNavigateOrderDetail(order.id) }
            >
              <Text style={styles.orderName}>{(order.name).toUpperCase()}</Text>
              <Text style={styles.orderDescription}>{(order.cakeDescription).toUpperCase()}</Text>
              <Text style={styles.orderDescription}>{order.weight} Kg</Text>
              <View style={styles.deliveryHour}>
                <Feather name='clock' size={14} >
                  <Text>  {order.deliveryHour}</Text>
                </Feather>
              </View>
              <Text style={styles.orderStatus}>{order.status.toUpperCase()}</Text>
            </TouchableOpacity>
          )})
        }

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
  dates: {
    width: '90%',
    height: '5%',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  currentDate: {
    fontSize: 24,
    color: theme.colors.purple,
  },
  scrollView: {
    width: '90%',
    height: '100%',
  },
  order: {
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
    top: 10,
  },
  orderStatus: {
    fontSize: 14,
    position: 'absolute',
    right: 10,
    bottom: 10,
    fontWeight: 'bold'
  }
})
