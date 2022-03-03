import { ReactNode } from 'react'
import * as S from './styles'
interface TitleProps {
  children: ReactNode
}

export function Title ( { children }: TitleProps) {
  return (
      <S.Header>
        <S.TitleText>
          {children}
        </S.TitleText>
      </S.Header>
  )
}

