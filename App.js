import "react-native-gesture-handler";
import { useEffect, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Main from "./components/main";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/Fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/Fonts/Roboto-Medium.ttf"),
    "Roboto-Bolt": require("./assets/Fonts/Roboto-Bold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container} onLayout={onLayout}>
      <Provider store={store}>
        <Main />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
  },
});
