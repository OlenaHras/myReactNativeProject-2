import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

import { useState } from "react";

const initialState = {
  email: "",
  password: "",
};

const LoginScreen = ({
  screenWidth,
  screenHeight,
  handleButtonClick,
  handleFocus,
  isShowKeyboard,
}) => {
  const [state, setstate] = useState(initialState);
  const [isFocused, setIsFocused] = useState("");

  const handleSubmit = () => {
    handleButtonClick();
    console.log(state);
    setstate(initialState);
  };

  const onFocus = (inputName) => {
    handleFocus();
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
                borderColor: isFocused === "email" ? "#FF6C00" : "#E8E8E8",
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
                borderColor: isFocused === "password" ? "#FF6C00" : "#E8E8E8",
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
          onPress={handleSubmit}
          style={styles.button}
          activeOpacity={0.8}
        >
          <Text style={styles.btnTitle}>Войти</Text>
        </TouchableOpacity>
        <Text style={{ ...styles.linkToLogIn, marginBottom: orientation }}>
          Нет аккаунта? Зарегистрироваться
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    lineHeight: 19,
    textAlign: "center",
  },
});

export default LoginScreen;
