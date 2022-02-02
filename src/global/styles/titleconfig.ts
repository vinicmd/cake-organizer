import { StyleSheet } from 'react-native'
import { theme } from './theme'

export const titleStyles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  title: {
    width: '90%',
    height: '7%',
    marginTop: 18,//status bar tem 18px de altura
    paddingTop: 15,
  },
  titleText: {
    color: theme.colors.purple,
    fontSize: 28,
    justifyContent: 'center',
    fontWeight: 'bold',
  },
})
