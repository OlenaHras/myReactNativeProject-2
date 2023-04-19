import {
  StyleSheet,
  Text,
  View,
  // TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { TextInput } from "react-native-element-textinput";
import { useState } from "react";

const initialState = {
  email: "",
  password: "",
};

const LoginScreen = ({
  screenWidth,
  handleButtonClick,
  handleFocus,
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
      <Text style={styles.headerTitle}>Войти</Text>
      <View style={{ ...styles.form, width: screenWidth }}>
        <View style={{ marginBottom: isShowKeyboard ? 93 : 43 }}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <TextInput
              style={styles.input}
              focusColor="#FF6C00"
              placeholder="Адрес электронной почты"
              placeholderTextColor="#BDBDBD"
              value={state.email}
              onFocus={handleFocus}
              onChangeText={(value) =>
                setstate((prevState) => ({ ...prevState, email: value }))
              }
            />
            <TextInput
              style={{ ...styles.input, marginBottom: 0 }}
              focusColor="#FF6C00"
              placeholder="Пароль"
              placeholderTextColor="#BDBDBD"
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
          <Text style={styles.btnTitle}>Войти</Text>
        </TouchableOpacity>
        <Text style={styles.linkToLogIn}>Нет аккаунта? Зарегистрироваться</Text>
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
    marginBottom: 111,
  },
});

export default LoginScreen;
