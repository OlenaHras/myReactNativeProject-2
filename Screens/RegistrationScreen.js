import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

import { useState } from "react";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const RegistrationScreen = ({
  screenWidth,
  screenHeight,
  handleFocus,
  handleButtonClick,
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

  return (
    <>
      <View style={styles.avatar}>
        <View style={styles.addButton}>
          <Image
            source={require("../assets/images/addButton.png")}
            style={{ width: 13, height: 13 }}
          />
        </View>
      </View>
      <Text style={styles.headerTitle}>Регистрация</Text>
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
                borderColor: isFocused === "login" ? "#FF6C00" : "#E8E8E8",
              }}
              placeholder="Логин"
              placeholderTextColor="#BDBDBD"
              value={state.login}
              onFocus={() => onFocus("login")}
              onBlur={() => onBlur("login")}
              onChangeText={(value) =>
                setstate((prevState) => ({ ...prevState, login: value }))
              }
            />
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
                borderColor: isFocused === "password" ? "#FF6C00" : "#E8E8E8",
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
          onPress={handleSubmit}
          style={styles.button}
          activeOpacity={0.8}
        >
          <Text style={styles.btnTitle}>Зарегистрироваться</Text>
        </TouchableOpacity>
        <Text style={styles.linkToLogIn}>Уже есть аккаунт? Войти</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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
    width: 25,
    height: 25,
    borderColor: "#FF6C00",
    borderRadius: 50,
    borderWidth: 1,
    position: "relative",
    right: -105,
    bottom: -80,
    alignItems: "center",
    justifyContent: "center",
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
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    lineHeight: 19,
    textAlign: "center",
    marginBottom: 45,
  },
});

export default RegistrationScreen;
