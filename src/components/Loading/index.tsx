import { ActivityIndicator, StyleSheet, Text, View } from "react-native"
import { theme } from "../../global/styles/theme"

export const Loading = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size={75} color={theme.colors.purple} />
  </View>
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

