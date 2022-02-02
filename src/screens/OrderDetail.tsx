import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {  Dimensions, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
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


export function OrderDetail () {
  const route = useRoute()
  const params = route.params as OrderDetailRouteParams

  const [order, setOrder] = useState<Order>(Object)

  useEffect( () => {
    api.get(`orders/${params.id}`).then(response => {
      setOrder(response.data)
    })
  }, [params.id])

  const navigation = useNavigation()

  function maskNumber (number: string) {
    const [, ddd, first, second] = /^([0-9]{2})([0-9]{5})([0-9]{4})/.exec(number) || ['', '', '','', ]

    return `(${ddd}) ${first}-${second}`
  }

  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={styles.goback}
        onPress={() => navigation.goBack()}
      >
        <Feather name='arrow-left' style={styles.gobackIcon} >
        </Feather>
        <Text style={styles.orderTitle}>
          PEDIDO NÚMERO: {order.id}
        </Text>
      </TouchableOpacity>

      <View style={styles.details}>
        <Text style={styles.text }>Preço: R$ {order.price.toString()}</Text>
        <Text style={styles.text }>Cliente: {order.name}</Text>
        <Text style={styles.text }>Telefone: {maskNumber(order.telephone)} </Text>
        <Text style={styles.text }>Endereço: {order.address}</Text>
        <Text style={styles.text }>Descrição: {order.cakeDescription}</Text>
        <Text style={styles.text }>Informação Adicional: {order.additional}</Text>
        <Text style={styles.text }>Data de entrega: {order.deliveryDate}</Text>
        <Text style={styles.text }>Horário de entrega: {order.deliveryHour}</Text>
        <Text style={styles.text }>{order.status}</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL(`http://wa.me/55${order.telephone}`)}
        >
          <Text style={styles.text } >
          <FontAwesome name='whatsapp' size={styles.text.fontSize} /> Enviar Mensagem
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL(`tel:${order.telephone}`)}
        >
          <Text style={styles.text }>
          <FontAwesome name='phone-alt' size={styles.text.fontSize} /> Ligar parar {order.name}
          </Text>
        </TouchableOpacity>

      </View>
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
  details: {
    width: Dimensions.get('window').width,
    padding: 24,
  },
  text: {
    fontSize: 18,
    color: 'black',
    padding: 5
  },

})
