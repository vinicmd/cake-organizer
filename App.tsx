import { Navigation } from './Navigation'
import 'react-native-gesture-handler';
import moment from 'moment'
import 'moment/locale/pt-br'

moment.locale('pt-br')
moment.updateLocale('pt-br', {
  months : [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
      "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ]
})

export default function App() {
  return (
      <Navigation />
  )
}
