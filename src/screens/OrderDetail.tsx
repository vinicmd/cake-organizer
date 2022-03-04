import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {  Alert, Dimensions, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import { Loading } from "../components/Loading";
import { theme } from "../global/styles/theme";
import api from "../services/api";
import { maskNumber } from "../utils/maskNumber";

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


export function OrderDetail ({ navigation }: any) {
  const [order, setOrder] = useState<Order>(Object)

  const [loading, setLoading] = useState(true)

  const route = useRoute()
  const params = route.params as OrderDetailRouteParams

  useEffect( () => {
   function getOrder() {
      api.get(`orders/${params.id}`).then(response => {
        setOrder(response.data)
        setLoading(false)
      })
    }
    getOrder()
  }, [params.id])


  function handleChangeStatus() {
    return (
      api.patch(`/orders/${params.id}/cancel`,  )
    )
  }

  function showCancelAlert () {
    return (
      Alert.alert(
        'Você tem certeza?',
        'Você tem certeza que deseja cancelar esse pedido?',

        [
          {
            text: "Sim",
            onPress: () => showCancelAlertDefinitely()
          },
          {
            text: 'Não',
          }
        ]
      )
    )
  }



  function showCancelAlertDefinitely () {
    return (
      Alert.alert(
        'Você tem certeza mesmo?',
        'Última chance: Você realmente quer cancelar o pedido?',

        [
          {
            text: "Sim",
            onPress: () => console.log('sim definitivo')
          },
          {
            text: 'Não',
          }
        ]
      )
    )
  }
  if(loading){
    return <Loading />
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
          PEDIDO NÚMERO: {params.id}
        </Text>
      </TouchableOpacity>

      <View style={styles.details}>
        <View>
          <View style={styles.priceStatus}>
            <Text style={styles.text }>PREÇO: R$ <Text>{order.price},00</Text></Text>
            <Text style={styles.text }><Text style={{fontWeight: 'bold', fontSize: 20, textTransform: 'uppercase'}}>{order.status}</Text></Text>
          </View>
          <Text style={styles.text }>Nome: <Text style={styles.description }>{order.name}</Text></Text>
          <Text style={styles.text }>Telefone: <Text style={styles.description }>{maskNumber(order.telephone)}</Text></Text>
          <Text style={styles.text }>Endereço: <Text style={styles.description }>{order.address}</Text></Text>
          <Text style={styles.text }>Desc. Pedido: <Text style={styles.description }>{order.cakeDescription}</Text></Text>
          <Text style={styles.text }>Infos. Adicionais: <Text style={styles.description }>{order.additional}</Text></Text>
          <Text style={styles.text }>Data de Entrega: <Text style={styles.description }>{order.deliveryDate}</Text></Text>
          <Text style={styles.text }>Horário de Entrega: <Text style={styles.description }>{order.deliveryHour}</Text></Text>
          <View style={styles.buttons} >
            <TouchableOpacity
              style={styles.whatsappButton}
              onPress={() => Linking.openURL(`http://wa.me/55${order.telephone}`)}
            >
              <Text style={[styles.text, styles.button] } >
              <FontAwesome name='whatsapp' size={styles.text.fontSize + 5} /> Enviar Mensagem
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.telephoneButton}
              onPress={() => Linking.openURL(`tel:${order.telephone}`)}
            >
              <Text numberOfLines={1} style={[styles.text, styles.button] }>
              <FontAwesome name='phone-alt' size={styles.text.fontSize} /> Ligar parar {(order.name)}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => navigation.navigate('EditDetails', order.id)}
          >
            <Text style={[styles.text, styles.button] }>
              <Feather name='edit' size={styles.text.fontSize}/> Editar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={showCancelAlert}
          >
            <Text style={[styles.text, styles.button] }>
              <Feather name='settings' size={styles.text.fontSize}/> Status
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 12,
    paddingHorizontal: 12
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
    height: '90%',
    padding: 24,
    flexDirection: 'column',
    justifyContent: 'space-between',

  },
  priceStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'black',
    paddingVertical: 4,
    fontWeight: 'bold'
  },
  description: {
    fontWeight: 'normal',
    textTransform: 'uppercase',
  },
  whatsappButton: {
    margin: 5,
    padding: 5,
    backgroundColor: theme.colors.purple,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  telephoneButton: {
    margin: 5,
    padding: 5,
    backgroundColor: theme.colors.purple,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttons: {
    alignContent: 'center',
    marginVertical: 10
  },
  button: {
    color: theme.colors.white,
    fontWeight: 'bold',
    fontSize: 20,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  editButton: {
    width: 150,
    margin: 5,
    padding: 5,
    backgroundColor: theme.colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  cancelButton: {
    width: 150,
    margin: 5,
    padding: 5,
    backgroundColor: theme.colors.red,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  }

})
