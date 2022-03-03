import styled from 'styled-components/native'
import { theme } from '../../global/styles/theme'

export const Header = styled.View`
  width: 100%;
  padding: 20px;
  margin-top: 24px;
  justify-content: center;

  `

export const TitleText = styled.Text`
  color: ${theme.colors.purple};
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
`
