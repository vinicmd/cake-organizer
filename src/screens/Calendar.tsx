import { useState } from 'react'
import { View, StyleSheet, Text} from 'react-native'
import { Title } from '../components/Title'
import CalendarPicker from 'react-native-calendar-picker'
import { theme } from '../global/styles/theme'

export function Calendar () {
  const [selectedStartDate, setSelectedStartDate] = useState<any>(null)

  const startDate = selectedStartDate ? selectedStartDate.format('YYYY-MM-DD').toString() : ''

  return (
    <View style={styles.main} >
      <Title>
        Calendário
      </Title>
      <View>
        <CalendarPicker
          onDateChange={setSelectedStartDate}
          weekdays={['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']}
          months={['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']}
          previousTitle="Anterior"
          nextTitle="Próximo"
          todayBackgroundColor={theme.colors.lightPurple}
          selectedDayColor={theme.colors.purple}
          selectedDayTextColor="#000000"
        />
        <Text >SELECTED DATE: {startDate}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },

})
