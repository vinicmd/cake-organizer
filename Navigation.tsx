import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Feather  from 'react-native-vector-icons/Feather'
import { StatusBar } from 'expo-status-bar'

import { theme } from './src/global/styles/theme'

import { Orders } from './src/screens/Orders'
import { Balance } from './src/screens/Balance'
import { AddOrder } from './src/screens/AddOrder'
import { Calendar } from './src/screens/Calendar'
import { Contacts } from './src/screens/Contacts'
import { OrderDetail } from './src/screens/OrderDetail'
import { EditDetails } from './src/screens/EditDetails'


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function OrderStack () {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='HomeScreen'
        component={Orders}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='OrderDetail'
        component={OrderDetail}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='EditDetails'
        component={EditDetails}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

function Tabs () {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: `${theme.colors.lightPurple}`,
        tabBarInactiveTintColor: `${theme.colors.purple}`,
        tabBarActiveBackgroundColor: `${theme.colors.purple}`,
      }}
    >
      <Tab.Screen
        name='Home'
        component={OrderStack}
        options={{
          headerShown: false,
          title: 'Início',
          tabBarIcon: ( { size, color }) => (
            <Feather name='home' size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name='Balance'
        component={Balance}
        options={{
          title: 'Saldo',
          tabBarIcon: ( { size, color }) => (
            <Feather name='dollar-sign' size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='Add'
        component={AddOrder}
        options={{
          title: 'Adicionar',
          tabBarIcon: ( { size, color }) => (
            <Feather name='plus-circle' size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='Calendar'
        component={Calendar}
        options={{
          title: 'Calendário',
          tabBarIcon: ( { size, color }) => (
            <Feather name='calendar' size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='Contacts'
        component={Contacts}
        options={{
          title: 'Contatos',
          tabBarIcon: ( { size, color }) => (
            <Feather name='users' size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export function Navigation () {
  return (
    <NavigationContainer>
      <Tabs />

      <StatusBar style='inverted' backgroundColor='#5252A3' />
    </NavigationContainer>
  )
}
