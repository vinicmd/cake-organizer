import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { SingIn } from './src/SIngIn'

export default function App() {
  return (
    <View>
      <SingIn />
      <StatusBar style="auto" />
    </View>
  );

}

