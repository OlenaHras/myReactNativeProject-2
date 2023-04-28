import {
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";

const initialState = {
  email: "",
  password: "",
};

const LoginScreen = ({ navigation }) => {
  const [state, setstate] = useState(initialState);
  const [isFocused, setIsFocused] = useState("");
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("window").width
  );
  const [screenHeight, setScreenHeight] = useState(
    Dimensions.get("window").height
  );

  const handleButtonClick = () => {
    setIsShowKeyboard(false);
    setstate(initialState);
    console.log(state);
    Keyboard.dismiss();
  };

  useEffect(() => {
    const onChange = () => {
      setIsShowKeyboard(false);
      setScreenHeight(Dimensions.get("window").height);
      setScreenWidth(Dimensions.get("window").width);
    };
    Dimensions.addEventListener("change", onChange);
  }, []);

  const onFocus = (inputName) => {
    setIsShowKeyboard(true);
    setIsFocused(inputName);
  };

  const onBlur = (inputName) => {
    if (isFocused === inputName) {
      setIsFocused("");
    }
  };

  const orientation = screenWidth > screenHeight ? 24 : 111;
  return (
    <>
      <TouchableWithoutFeedback onPress={handleButtonClick}>
        <ImageBackground
          source={require("../assets/images/bgImage.png")}
          style={{
            ...styles.bgImage,
            width: screenWidth,
            height: screenHeight,
          }}
        >
          <View style={styles.screenWrapper}>
            <Text style={styles.headerTitle}>Войти</Text>
            <View style={{ ...styles.form, width: screenWidth }}>
              <View
                style={{
                  marginBottom:
                    screenWidth > screenHeight ? 24 : isShowKeyboard ? 93 : 43,
                }}
              >
                <KeyboardAvoidingView
                  behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
                  <TextInput
                    style={{
                      ...styles.input,
                      borderColor:
                        isFocused === "email" ? "#FF6C00" : "#E8E8E8",
                    }}
                    placeholder="Адрес электронной почты"
                    placeholderTextColor="#BDBDBD"
                    value={state.email}
                    onFocus={() => onFocus("email")}
                    onBlur={() => onBlur("email")}
                    onChangeText={(value) =>
                      setstate((prevState) => ({ ...prevState, email: value }))
                    }
                  />
                  <TextInput
                    style={{
                      ...styles.input,
                      marginBottom: 0,
                      borderColor:
                        isFocused === "password" ? "#FF6C00" : "#E8E8E8",
                    }}
                    placeholder="Пароль"
                    placeholderTextColor="#BDBDBD"
                    secureTextEntry={true}
                    value={state.password}
                    onFocus={() => onFocus("password")}
                    onBlur={() => onBlur("password")}
                    onChangeText={(value) =>
                      setstate((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  />
                </KeyboardAvoidingView>
              </View>
              <TouchableOpacity
                onPress={handleButtonClick}
                style={styles.button}
                activeOpacity={0.8}
              >
                <Text style={styles.btnTitle}>Войти</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Registration")}
                activeOpacity={0.6}
              >
                <Text
                  style={{ ...styles.linkToLogIn, marginBottom: orientation }}
                >
                  Нет аккаунта? Зарегистрироваться
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </>
  );
};

const styles = StyleSheet.create({
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
  headerTitle: {
    fontSize: 30,
    fontFamily: "Roboto-Medium",
    lineHeight: 35,
    marginVertical: 32,
  },
  form: {
    paddingHorizontal: 16,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    height: 50,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    height: 51,
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
    color: "#1B4371",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    lineHeight: 19,
    textAlign: "center",
  },
});

export default LoginScreen;
