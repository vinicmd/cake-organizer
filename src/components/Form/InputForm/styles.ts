import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { theme } from '../../../global/styles/theme'

export const Container = styled.View`
  width: 100%;
`
export const Error = styled.Text`
  color: ${theme.colors.black};

  font-size: ${RFValue(14)}px;
`
