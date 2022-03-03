import { OrderCard } from '../../components/OrderCard'
import { Title } from '../../components/Title'
import * as S from './styles'

export function Orders(){
  return (
    <S.Container>
      <Title>
        Pedidos
      </Title>

      <S.Dates>
        <S.CurrentDate>
          03 de Março de 2022
        </S.CurrentDate>
      </S.Dates>

      <S.Cards>
        <OrderCard />
      </S.Cards>
    </S.Container>
  )
}

{/*
  import moment from 'moment';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, RefreshControl, Dimensions } from 'react-native'
import Feather  from 'react-native-vector-icons/Feather'
import FontAwesome  from 'react-native-vector-icons/FontAwesome5'

import { Loading } from '../components/Loading';
import { Title } from '../components/Title';
import { theme } from '../global/styles/theme'
import { statusColor } from '../utils/statusColor';
import api from '../services/api';

interface OrderItem {
  id: number
  name: string
  cakeDescription: string
  weight: number
  deliveryHour: string
  status: string
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

  //função executada quando for solicitado o refresh
  const onRefresh = () => {
    setRefreshing(true)
    setLoading(true)
    setOrders([])
    getOrders()
  }

  //Retorna dados da aplicação. Só preciso que retorne uma vez
  useEffect(() => {
    getOrders()
  }, [])


  //função que faz a navegação para página de detalhes (useNavigation é meio estranho, eu confeço)
  function handleNavigateOrderDetail (id: number) {
    return navigation.navigate('OrderDetail', { id })
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

        {orders.length === 0
        ? (<View style={styles.condicional}>
            <FontAwesome name='heart-broken' size={styles.condicionalText.fontSize} color={styles.condicionalText.color} /><Text style={styles.condicionalText}>Sem pedidos no momento.</Text>
          </View>)
        : orders.map(order => {
            return (
              <TouchableOpacity
                key={order.id}
                style={[styles.order, {backgroundColor: `${statusColor[order.status]}`} ]}
                onPress={ () => handleNavigateOrderDetail(order.id) }
              >
                <View style={styles.firstRow}>
                  <Text style={styles.orderName}>{(order.name).toUpperCase()}</Text>
                  <Text style={styles.orderDescription}>{(order.cakeDescription).toUpperCase()}</Text>
                  <Text style={styles.orderDescription}>{order.weight} Kg</Text>
                </View>
                <View style={styles.SecondRow}>
                  <Feather name='clock' size={14} >
                    <Text>  {order.deliveryHour}</Text>
                  </Feather>
                  <Text style={styles.orderStatus}>{order.status.toUpperCase()}</Text>
                </View>
              </TouchableOpacity>
            )
          })
        }

      </ScrollView>
    </View>
  )

}

const styles = StyleSheet.create({
  main: {
    flex: 1,
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
  condicional: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  condicionalText: {
    fontSize: 20,
    color: theme.colors.lightPurple,
  },
  order: {
    width: '100%',
    height: 80,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  orderName: {
    fontSize: 14,
    fontWeight: 'bold',
   },
  orderDescription: {
    fontSize: 14,
  },
  firstRow: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  SecondRow: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  orderStatus: {
    fontSize: 14,
    fontWeight: 'bold'
  }
})

*/}
