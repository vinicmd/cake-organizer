import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from 'react-native-vector-icons/Feather'
import { theme } from "../global/styles/theme";
import api from "../services/api";

interface OrderDetailRouteParams {
  id: number
}

interface Order {
  id: number
  created_at: string
  name: string
  telephone: string
  address: string
  cakeDescription: string
  additional: string
  weight: number
  price: number
  deliveryDate: string
  deliveryHour: string
  status: string
}

export function EditDetails ({navigation}: any ) {
  const route = useRoute()
  const params = route.params as OrderDetailRouteParams
  const [order, setOrder] = useState<Order>(Object)

  useEffect( () => {
    api.get(`orders/${params}`).then(response => {
      setOrder(response.data)
    })
  }, [params])


  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={styles.goback}
        onPress={() => navigation.goBack()}
      >
        <Feather name='arrow-left' style={styles.gobackIcon} >
        </Feather>
        <Text style={styles.orderTitle}>
          EDITAR PEDIDO {order.id}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
  goback: {
    width: Dimensions.get('window').width,
    height: '10%',
    marginTop: 24,//status bar tem 24px de altura
    paddingRight: '5%',
    paddingLeft: '5%',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gobackIcon: {
    fontSize: 28,
    color: theme.colors.purple,
  },
  orderTitle: {
    fontSize: 24,
    color: theme.colors.purple,
  },
})
