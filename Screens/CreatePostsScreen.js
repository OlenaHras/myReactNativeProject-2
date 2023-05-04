import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";
// const TabStack = createBottomTabNavigator();

const initialState = {
  title: "",
  location: "",
};

const CreatePostsScreen = () => {
  const [state, setstate] = useState(initialState);
  const [isFocused, setIsFocused] = useState("");

  const handleButtonClick = () => {
    setstate(initialState);
    console.log(state);
  };

  const onFocus = (inputName) => {
    // setIsShowKeyboard(true);
    setIsFocused(inputName);
  };

  const onBlur = (inputName) => {
    if (isFocused === inputName) {
      setIsFocused("");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.addContainer}>
        <View style={styles.addIconWrapper}>
          <Image source={require("../assets/images/camera.png")} />
        </View>
      </View>
      <Text style={styles.addPictureTitle}>Загрузите фото</Text>
      <View
      // style={{
      //   marginBottom:
      //     screenWidth > screenHeight ? 24 : isShowKeyboard ? 93 : 43,
      // }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TextInput
            style={{
              ...styles.input,
              borderBottomColor: isFocused === "title" ? "#FF6C00" : "#E8E8E8",
            }}
            placeholder="Название..."
            placeholderTextColor="#BDBDBD"
            value={state.title}
            onFocus={() => onFocus("title")}
            onBlur={() => onBlur("title")}
            onChangeText={(value) =>
              setstate((prevState) => ({ ...prevState, title: value }))
            }
          />
          <TextInput
            style={{
              ...styles.input,
              marginBottom: 32,
              borderBottomColor:
                isFocused === "location" ? "#FF6C00" : "#E8E8E8",
            }}
            placeholder="Местность..."
            placeholderTextColor="#BDBDBD"
            value={state.location}
            onFocus={() => onFocus("location")}
            onBlur={() => onBlur("location")}
            onChangeText={(value) =>
              setstate((prevState) => ({
                ...prevState,
                location: value,
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
        <Text style={styles.btnTitle}>Опубликовать</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => navigation.navigate("Registration")}
          activeOpacity={0.6}
        >
          <Image source={require("../assets/images/trash.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    marginTop: 32,
  },
  addContainer: {
    width: "100%",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  addIconWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  addPictureTitle: {
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#fff",
    fontSize: 16,
    lineHeight: 19,
    height: 50,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    height: 51,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 120,
  },
  btnTitle: {
    color: "#BDBDBD",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    lineHeight: 19,
  },
  deleteButton: {
    // borderWidth: 1,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    height: 40,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 22,
  },
  footer: {
    // position: "absolute",
    // left: 0,
    // bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    // height: 83,
    width: "100%",
    borderWidth: 1,
    borderColor: "#fff",
    // borderTopColor: "#BDBDBD",
  },
});

export default CreatePostsScreen;
