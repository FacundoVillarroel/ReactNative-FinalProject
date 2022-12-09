import { StatusBar } from 'expo-status-bar';
import { Text, View, ActivityIndicator } from 'react-native';
import { useFonts } from "expo-font";

import { styles } from './styles';
import { COLORS } from "./constants/colors"

export default function App() {
  const [ loaded ] = useFonts({
    "MartinMono-Light": require("../assets/fonts/MartianMono-Light.ttf"),
    "MartinMono-Regular": require("../assets/fonts/MartianMono-Regular.ttf"),
    "MartinMono-Medium": require("../assets/fonts/MartianMono-Medium.ttf"),
    "MartinMono-Bold": require("../assets/fonts/MartianMono-Bold.ttf")
  }) 

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color={COLORS.primary} size="large" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

