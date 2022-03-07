import styled from 'styled-components/native'
import { TextInput } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { theme } from '../../../global/styles/theme'

export const Container = styled(TextInput)`
  width: 100%;
  padding: 16px 18px;

  font-size: ${RFValue(14)}px;

  color: ${theme.colors.black};
  background-color: ${theme.colors.white};
  border-radius: 5px;

  margin-bottom: 8px;
`
