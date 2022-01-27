import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feather  from 'react-native-vector-icons/Feather'

import { HomeScreen } from './src/screens/Home'
import { theme } from './src/global/styles/theme'

export function Navigation () {
  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: `${theme.colors.purple}`,
          tabBarInactiveTintColor: `${theme.colors.lightPurple}`

        }}
      >
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{
            title: 'Início',
            tabBarBadge: 3,
            tabBarIcon: ( { size, color }) => (
              <Feather name='home' size={size} color={color} />
            )
          }}
        />

        <Tab.Screen
          name='Saldo'
          component={HomeScreen}
          options={{
            title: 'Saldo',
            tabBarIcon: ( { size, color }) => (
              <Feather name='dollar-sign' size={size} color={color} />
            )
          }}
        />
        <Tab.Screen
          name='Add'
          component={HomeScreen}
          options={{
            title: 'Adicionar',
            tabBarIcon: ( { size, color }) => (
              <Feather name='plus-circle' size={size} color={color} />
            )
          }}
        />
        <Tab.Screen
          name='Callendar'
          component={HomeScreen}
          options={{
            title: 'Calendário',
            tabBarIcon: ( { size, color }) => (
              <Feather name='calendar' size={size} color={color} />
            )
          }}
        />
        <Tab.Screen
          name='Contacts'
          component={HomeScreen}
          options={{
            title: 'Contatos',
            tabBarIcon: ( { size, color }) => (
              <Feather name='users' size={size} color={color} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
