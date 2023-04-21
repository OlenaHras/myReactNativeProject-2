import { useState, useEffect, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("window").width
  );
  const [screenHeight, setScreenHeight] = useState(
    Dimensions.get("window").height
  );

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/Fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/Fonts/Roboto-Medium.ttf"),
  });

  const handleButtonClick = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleFocus = () => {
    setIsShowKeyboard(true);
  };

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
    const onChange = () => {
      setScreenHeight(Dimensions.get("window").height);
      setScreenWidth(Dimensions.get("window").width);
    };
    Dimensions.addEventListener("change", onChange);
  }, [screenWidth]);

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container} onLayout={onLayout}>
      <TouchableWithoutFeedback onPress={handleButtonClick}>
        <ImageBackground
          source={require("./assets/images/bgImage.png")}
          style={{
            ...styles.bgImage,
            width: screenWidth,
            height: screenHeight,
          }}
        >
          <View style={styles.screenWrapper}>
            <RegistrationScreen
              screenWidth={screenWidth}
              screenHeight={screenHeight}
              handleButtonClick={handleButtonClick}
              handleFocus={handleFocus}
              isShowKeyboard={isShowKeyboard}
            />
            {/* <LoginScreen
              screenWidth={screenWidth}
              screenHeight={screenHeight}
              handleButtonClick={handleButtonClick}
              handleFocus={handleFocus}
              isShowKeyboard={isShowKeyboard}
            /> */}
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
  },
  bgImage: {
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  screenWrapper: {
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
