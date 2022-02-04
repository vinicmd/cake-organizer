import { useEffect, useState } from 'react'
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, FlatList, Dimensions, TextInput, ListViewBase} from 'react-native'
import { Title } from '../components/Title'
import { theme } from '../global/styles/theme'
import api from '../services/api'
import { maskNumber } from '../utils/maskNumber'

type Clients = {
  name: string
  telephone: string
}

function Client({name, telephone}: Clients) {
  return (
    <TouchableOpacity style={styles.listWrapper} >
      <Text numberOfLines={1} style={styles.name}>{name}</Text>
      <Text>{maskNumber(telephone)}</Text>
    </TouchableOpacity>
  )
}

export function Contacts () {
  const [clients, setClients] = useState<Clients[]>([])

  useEffect( () => {
    api.get('/clients').then(response =>{
      setClients(response.data)
    })
  }, [])

  return (
    <View style={styles.main} >

      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.list}
        data={clients}
        renderItem={({item}) => <Client name={item.name} telephone={item.telephone} />}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    height: Dimensions.get('window').width,
    alignItems: 'center',
    paddingTop: 24,
    paddingHorizontal: 12,
  },
  searchArea: {
    width: '100%',
    height: 50,
    marginTop: 24,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.purple
  },
  input: {
    padding: 12,
    fontSize: 24
  },
  list: {
    width: '100%',
  },
  listWrapper: {
    width: '100%',
    padding: 15,
    marginBottom: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.purple,
    backgroundColor: '#ebebf5'
  },
  name: {
    textTransform: 'uppercase',
    marginBottom: 5,
    fontWeight: 'bold'
  },
})
