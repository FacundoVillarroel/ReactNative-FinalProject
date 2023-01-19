import { View, ActivityIndicator } from 'react-native';
import { useFonts } from "expo-font";
import { Provider } from 'react-redux';
import {store} from "./store";
import AppNavigator from "./navigation/index"
import { init } from "./db/index";

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

  init()
  .then(() => {
    console.log("Initialized database");
  })
  .catch((err) => {
    console.log("Initializing db failed.");
    console.log(err);
  })

  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
}

