import { TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: ${RFValue(80)}px;
  padding: 10px;
  margin-bottom: 12px;
  border-radius: 12px;
  flex-direction: row;
  justify-content: space-between;
`

export const CakeInfo = styled.View`
  flex-direction: column;
  justify-content: space-between;
`

export const DeliveryInfo = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`
export const DefaultText = styled.Text`
  font-size: ${RFValue(14)}px;
`

export const Name = styled(DefaultText)`
  font-weight: bold;
  text-transform: uppercase;

`

export const Description = styled(DefaultText)`
  text-transform: uppercase;
`

export const CakeWeight = styled(DefaultText)`
`

export const DeliveryHour = styled(Description)`
`

export const Status = styled(Name)`
`
