import { ActivityIndicator, StyleSheet, Text, View } from "react-native"
import { theme } from "../../global/styles/theme"
import * as S from "./styles"

export const Loading = () => (
  <S.Container>
    <S.Spinner />
  </S.Container>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
})

