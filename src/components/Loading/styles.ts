import { ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'
import { theme } from "../../global/styles/theme"

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
export const Spinner = styled(ActivityIndicator).attrs({ size:75, color:theme.colors.purple })`
`
/* export const Loading = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size={75} color={theme.colors.purple} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1;
    justifyContent: center;
  },
  horizontal: {
    flexDirection: row;
    justifyContent: space-around;
    padding: 10;
  }
}) */
