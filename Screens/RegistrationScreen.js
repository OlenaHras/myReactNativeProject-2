import { useState, useEffect } from "react";

import {
  StyleSheet,
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
  Button,
} from "react-native";
import { useDispatch } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";

import { authSignUpUser } from "../redux/auth/authOperations";

const initialState = {
  nickname: "",
  email: "",
  password: "",
};

const RegistrationScreen = ({ navigation }) => {
  const [state, setstate] = useState(initialState);
  const [isFocused, setIsFocused] = useState("");
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const dispatch = useDispatch();

  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("screen").width
  );
  const [screenHeight, setScreenHeight] = useState(
    Dimensions.get("screen").height
  );

  const handleButtonClick = () => {
    setIsShowKeyboard(false);
    setstate(initialState);
    dispatch(authSignUpUser(state));
    Keyboard.dismiss();
  };

  const keyboardHide = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
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

  return (
    <>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <ImageBackground
          source={require("../assets/images/bgImage.png")}
          style={{
            ...styles.bgImage,
            width: screenWidth,
            height: screenHeight,
          }}
        >
          <View style={styles.screenWrapper}>
            <View style={styles.avatar}>
              <MaterialIcons
                name="add-circle-outline"
                size={24}
                color="#FF6C00"
                style={styles.addButton}
              />
            </View>
            <Text style={styles.headerTitle}>Реєстрація</Text>
            <View style={{ ...styles.form, width: screenWidth }}>
              <View
                style={{
                  marginBottom:
                    screenWidth > screenHeight ? 8 : isShowKeyboard ? 159 : 43,
                }}
              >
                <KeyboardAvoidingView
                  behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
                  <TextInput
                    style={{
                      ...styles.input,
                      borderColor:
                        isFocused === "nickname" ? "#FF6C00" : "#E8E8E8",
                    }}
                    placeholder="Логін"
                    placeholderTextColor="#BDBDBD"
                    value={state.nickname}
                    onFocus={() => onFocus("nickname")}
                    onBlur={() => onBlur("nickname")}
                    onChangeText={(value) =>
                      setstate((prevState) => ({
                        ...prevState,
                        nickname: value,
                      }))
                    }
                  />
                  <TextInput
                    style={{
                      ...styles.input,
                      borderColor:
                        isFocused === "email" ? "#FF6C00" : "#E8E8E8",
                    }}
                    placeholder="Адреса електронної пошти"
                    placeholderTextColor="#BDBDBD"
                    value={state.email}
                    onFocus={() => onFocus("email")}
                    onBlur={() => onBlur("email")}
                    onChangeText={(value) =>
                      setstate((prevState) => ({
                        ...prevState,
                        email: value,
                      }))
                    }
                  />
                  <TextInput
                    style={{
                      ...styles.input,
                      borderColor:
                        isFocused === "password" ? "#FF6C00" : "#E8E8E8",
                      marginBottom: 0,
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
                <Text style={styles.btnTitle}>Зареєстуватися</Text>
              </TouchableOpacity>

              <View>
                <Text style={styles.textToLogIn}>
                  Вже є акаунт?{" "}
                  <Text
                    onPress={() => navigation.navigate("Login")}
                    style={styles.linkToLogIn}
                  >
                    Увійти
                  </Text>
                </Text>
              </View>
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
  avatar: {
    position: "relative",
    top: -60,
    marginBottom: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  addButton: {
    position: "relative",
    right: -105,
    bottom: -80,
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
  textToLogIn: {
    color: "#1B4371",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    lineHeight: 19,
    textAlign: "center",
    marginBottom: 66,
  },
  linkToLogIn: {
    textDecorationLine: "underline",
  },
});

export default RegistrationScreen;
