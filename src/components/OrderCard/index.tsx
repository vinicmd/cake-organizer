import * as S from './styles'
import Feather  from 'react-native-vector-icons/Feather'
import { statusColor } from '../../utils/statusColor'

interface OrderProps {
  name: string
  cakeDescription: string
  weight: number
  deliveryHour: string
  status: string
  onPress: () => void
}

export function OrderCard({
  name,
  cakeDescription,
  weight,
  deliveryHour,
  status,
  onPress,
  ...rest
}: OrderProps) {
  return(
    <S.Container
      style={{backgroundColor: `${statusColor[status]}`}}
      onPress={onPress}
      {...rest}
    >
      <S.CakeInfo>
        <S.Name>{name}</S.Name>
        <S.Description>{cakeDescription}</S.Description>
        <S.CakeWeight>{weight} Kg</S.CakeWeight>
      </S.CakeInfo>
      <S.DeliveryInfo>
        <Feather name='clock' size={14}>
          <S.DeliveryHour>
            {` ${deliveryHour}`}
          </S.DeliveryHour>
        </Feather>
        <S.Status>{status}</S.Status>
      </S.DeliveryInfo>
    </S.Container>
  )
}
