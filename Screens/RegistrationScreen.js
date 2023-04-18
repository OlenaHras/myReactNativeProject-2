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
  handleFocus,
  handleButtonClick,
  isShowKeyboard,
}) => {
  const [state, setstate] = useState(initialState);

  const handleSubmit = () => {
    handleButtonClick();
    console.log(state);
    setstate(initialState);
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
        <View style={{ marginBottom: isShowKeyboard ? 159 : 43 }}>
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
              style={{ ...styles.input, marginBottom: 0 }}
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
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    height: 50,
    padding: 16,
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
