import * as S from './styles'
import { useEffect, useState } from 'react'
import { RefreshControl } from 'react-native'
import moment from 'moment'

import api from '../../services/api'

import { OrderCard } from '../../components/OrderCard'
import { Title } from '../../components/Title'
import { Loading } from '../../components/Loading'

interface OrderItem {
  id: number
  name: string
  cakeDescription: string
  weight: number
  deliveryHour: string
  status: string
}

export function Orders({navigation}: any){
  const [orders, setOrders ] = useState<OrderItem[]>([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)

  const date = moment().format('DD [de] MMMM [de] YYYY')

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
  }, [loading])

  if(loading) {
    return <Loading />
  }

  function handleNavigateOrderDetail(id: number) {
    return navigation.navigate('OrderDetail', { id })
  }

  return (
    <S.Container>
      <Title>
        Pedidos
      </Title>

      <S.Dates>
        <S.CurrentDate>{date}</S.CurrentDate>
      </S.Dates>

      <S.Cards
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        {
        orders.length === 0
          ? (
            <S.FailCard>
                <S.Icon >
                  <S.FailText> Sem pedidos no momento.</S.FailText>
                </S.Icon>
            </S.FailCard>
          )
          : orders.map(order => {
            return (
              <OrderCard
                key={order.id}
                name={order.name}
                cakeDescription={order.cakeDescription}
                weight={order.weight}
                deliveryHour={order.deliveryHour}
                status={order.status}
                onPress={() => handleNavigateOrderDetail(order.id)}
              />
            )
          })
        }
      </S.Cards>
    </S.Container>
  )
}
