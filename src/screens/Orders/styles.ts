import { ScrollView } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import styled from 'styled-components/native'
import { theme } from '../../global/styles/theme'

export const Container = styled.View`
  width: 100%;
`

export const Dates = styled.View`
  padding: 0px 20px;

  justify-content: space-between;
  flex-direction: row;
`

export const CurrentDate = styled.Text`
  font-size: 24px;
  color: ${theme.colors.purple};
`

export const Cards = styled(ScrollView)`
  width: 100%;
  padding: 10px 20px;
`

export const FailCard = styled.View`
    width: 100%;
    height: 500px;
    justify-content: center;
    align-items: center;
`

export const FailText = styled.Text`
  font-size: 20;
  color: ${theme.colors.lightPurple};
`

export const Icon = styled(FontAwesome).attrs({name:'heart-broken'},)`
  color: ${theme.colors.lightPurple};
  font-size: 20;
`
