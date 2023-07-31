import "react-native-gesture-handler";
import { useState, useEffect, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Button, Image } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
// import { useRoute } from "./router";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import Home, { HomeTabs } from "./Screens/Home";

const MainStack = createStackNavigator();

export default function App() {
  // const routing = useRoute(true);

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
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="Login">
          <MainStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
        </MainStack.Navigator>
      </NavigationContainer>

      {/* <NavigationContainer> */}
      {/* {routing} */}
      {/* <TabStack.Navigator>
          <TabStack.Screen name="Posts" component={PostsScreen} />
          <TabStack.Screen name="Create" component={CreatePostsScreen} />
          <TabStack.Screen name="Profile" component={ProfileScreen} />
        </TabStack.Navigator> */}
      {/* </NavigationContainer> */}
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
