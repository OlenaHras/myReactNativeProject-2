import "react-native-gesture-handler";
import { useEffect, useCallback, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { useSelector, useDispatch } from "react-redux";
// import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { useRoute } from "./router";
import { store } from "./redux/store";
// import { authStateChanged } from "../redux/auth/authOperations";
import { auth } from "./config";
// const MainStack = createStackNavigator();
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function App() {
  const [user, setUser] = useState(null);
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/Fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/Fonts/Roboto-Medium.ttf"),
    "Roboto-Bolt": require("./assets/Fonts/Roboto-Bold.ttf"),
  });
  const auth = getAuth();
  const routing = useRoute(user);
  // const dispatch = useDispatch();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // const uid = user.uid;
      setUser(user);
    } else {
      // User is signed out
      // ...
    }
  });
  useEffect(() => {
    // dispatch(authStateChanged());
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
        <NavigationContainer>{routing}</NavigationContainer>
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
