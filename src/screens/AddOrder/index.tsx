import * as S from './styles'

import { Title } from '../../components/Title'
import { useForm } from 'react-hook-form'
import { Button, Text } from 'react-native'
import { InputForm } from '../../components/Form/InputForm'

export function AddOrder () {

  const { control, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data: any) => console.log(data);

  return (
    <S.Container>
      <Title>
        Adicionar Pedido
      </Title>
      <S.FormWrapper>
        <InputForm
          name='name'
          control={control}
          placeholder='Nome do cliente'
          autoCapitalize='sentences'
          autoCorrect={false}
          error={errors.name && errors.name.message}
        />

        <InputForm
          name='cakeDescription'
          control={control}
          placeholder='Descrição do bolo'
          autoCapitalize='sentences'
          autoCorrect={false}
          error={errors.name && errors.name.message}
        />

        <InputForm
          name='name'
          control={control}
          placeholder='Nome do cliente'
          autoCapitalize='sentences'
          autoCorrect={false}
          error={errors.name && errors.name.message}
        />

        <InputForm
          name='name'
          control={control}
          placeholder='Nome do cliente'
          autoCapitalize='sentences'
          autoCorrect={false}
          error={errors.name && errors.name.message}
        />

        <InputForm
          name='name'
          control={control}
          placeholder='Nome do cliente'
          autoCapitalize='sentences'
          autoCorrect={false}
          error={errors.name && errors.name.message}
        />
        <InputForm
          name='name'
          control={control}
          placeholder='Nome do cliente'
          autoCapitalize='sentences'
          autoCorrect={false}
          error={errors.name && errors.name.message}
        />
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </S.FormWrapper>
    </S.Container>
  )
}

/*

Pedido {
  name: string // identificação para o cliente
  cakeDescription: string
  additional: string
  weight: number
  price: number
  deliveryDate: string
  deliveryHour: string
  status: 'Aguardando Cliente' //Na criação, começará com 'Aguardando Cliente'
}
Nisso, gerará um link para o front web que conterá os dados para o cliente preencher, validando informações e quando ele confirmar, mudar o status.
CASO A PESSOA JÁ TENHA CADASTRO, NÃO PRECISA CONFIRMAR AS INFORMAÇÕES, SENDO QUE O LINK SE TORNA OPCIONAL.



Pessoa {
  id: uuid()
  name: string
  telephone: string
  cpf: string
  telephone: string
  address: string
  complement:
  number: number
  cep: number
}

A pessoa deve confirmar as informações no formulário para o pedido entrar no estado "Aguardando"
*/
