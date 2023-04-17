import { useState, useEffect, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
// const { width, height } = Dimensions.get("window");

// const initialState = {
//   login: "",
//   email: "",
//   password: "",
// };

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  // const [state, setstate] = useState(initialState);

  // const [dimensions, setDimensions] = useState(
  //   Dimensions.get("window").width - 16 * 2
  // );
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("window").width
  );
  const [screenHeight, setScreenHeight] = useState(
    Dimensions.get("window").height
  );
  const [isReady, setIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/Fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/Fonts/Roboto-Medium.ttf"),
  });

  const handleButtonClick = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    // console.log(state);
    // setstate(initialState);
  };

  const handleFocus = () => {
    setIsShowKeyboard(true);
  };

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
    // console.log(width);
    const onChange = () => {
      setScreenHeight(Dimensions.get("window").height);
      setScreenWidth(Dimensions.get("window").width);
      console.log(Dimensions.get("window"));
      // const width = Dimensions.get("window").width - 16 * 2;
    };
    Dimensions.addEventListener("change", onChange);
    // return () => {
    //   Dimensions.removeEventListener("change", onChange);
    // };
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
          {/* <RegistrationScreen
            screenHeight={screenHeight}
            screenWidth={screenWidth}
            handleButtonClick={handleButtonClick}
            handleFocus={handleFocus}
          /> */}
          <LoginScreen
            screenHeight={screenHeight}
            screenWidth={screenWidth}
            // handleButtonClick={handleButtonClick}
            handleFocus={handleFocus}
          />
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
    // alignItems: "center",
    // justifyContent: "center",
  },
  bgImage: {
    // position: "absolute",
    left: 0,
    top: 0,
    // width: "100%",
    // height: "100%",
    // width: screenWidth,
    // height: screenHeight,
    // flex: 1,
    // position: "absolute",
    // top: 0,
    // right: 0,
    // bottom: 0,
    // left: 0,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 30,
    fontFamily: "Roboto-Medium",
    lineHeight: 35,
    marginBottom: 33,
  },
  form: {
    width: 343,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    // marginHorizontal: 16,
    // width: 343,
    height: 50,
    padding: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    height: 51,
    marginTop: 109,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  btnTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    lineHeight: 19,
  },
  linkToLogIn: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    lineHeight: 19,
    textAlign: "center",
    marginBottom: 78,
  },
});
