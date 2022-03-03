import * as S from './styles'
import Feather  from 'react-native-vector-icons/Feather'



export function OrderCard() {
  return(
    <S.Container>
      <S.CakeInfo>
        <S.Name>VINICIUS DUARTE</S.Name>
        <S.Description>Bolo Alpino com trufas</S.Description>
        <S.CakeWeight>2 Kg</S.CakeWeight>
      </S.CakeInfo>
      <S.DeliveryInfo>
        <Feather name='clock' size={14}>
          <S.DeliveryHour>
            {' 16:30'}
          </S.DeliveryHour>
        </Feather>
        <S.Status>Entregue</S.Status>
      </S.DeliveryInfo>
    </S.Container>
  )
}
