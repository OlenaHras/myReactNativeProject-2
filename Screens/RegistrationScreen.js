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
import { useState, useEffect, useCallback } from "react";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const RegistrationScreen = ({
  screenHeight,
  screenWidth,
  //   handleButtonClick,
  handleFocus,
}) => {
  const [state, setstate] = useState(initialState);

  const handleButtonClick = () => {
    // setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setstate(initialState);
  };
  return (
    <>
      <Text style={styles.headerTitle}>Регистрация</Text>
      <View style={{ ...styles.form, width: screenWidth }}>
        {/* <View style={{ marginBottom: isShowKeyboard ? 32 : 109 }}> */}
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TextInput
            style={styles.input}
            placeholder="Логин"
            value={state.login}
            onFocus={handleFocus}
            onChangeText={(value) =>
              setstate((prevState) => ({ ...prevState, login: value }))
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Адрес электронной почты"
            value={state.email}
            onFocus={handleFocus}
            onChangeText={(value) =>
              setstate((prevState) => ({ ...prevState, email: value }))
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            secureTextEntry={true}
            value={state.password}
            onFocus={handleFocus}
            onChangeText={(value) =>
              setstate((prevState) => ({
                ...prevState,
                password: value,
              }))
            }
          />
        </KeyboardAvoidingView>
        {/* </View> */}
        <TouchableOpacity
          onPress={handleButtonClick}
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

export default RegistrationScreen;
