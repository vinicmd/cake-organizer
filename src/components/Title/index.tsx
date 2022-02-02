import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../global/styles/theme";

export function Title ( { children } : any) {
  return (
    <View style={titleStyles.title}>
      <Text style={titleStyles.titleText}>
        {typeof children === 'string'
          ? children.toUpperCase()
          : children
        }
      </Text>
    </View>
  )
}

const titleStyles = StyleSheet.create({
  title: {
    width: '90%',
    height: '10%',
    marginTop: 24,//status bar tem 24px de altura
    justifyContent: 'center',

  },
  titleText: {
    color: theme.colors.purple,
    fontSize: 30,
    fontWeight: 'bold',
  },
})
