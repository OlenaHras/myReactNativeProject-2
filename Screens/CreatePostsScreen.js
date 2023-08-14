import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { Camera } from "expo-camera";
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { Feather, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";

const initialState = {
  photo: null,
  title: "",
  locality: "",
};

const CreatePostsScreen = ({ navigation }) => {
  const [state, setState] = useState(initialState);
  const [isFocused, setIsFocused] = useState("");
  const [camera, setCamera] = useState(null);

  const handleButtonClick = async () => {
    let location = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    setState((prevState) => ({
      ...prevState,
      location: coords,
    }));
    console.log("state:", state);
    console.log("location:", coords);
    navigation.navigate("Публікації", { state, coords });
    setState(initialState);
  };

  const onFocus = (inputName) => {
    setIsFocused(inputName);
  };

  const onBlur = (inputName) => {
    if (isFocused === inputName) {
      setIsFocused("");
    }
  };

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setState((prevState) => ({
      ...prevState,
      photo: photo.uri,
    }));
  };
  return (
    <View style={styles.container}>
      {state.photo ? (
        <View style={styles.addContainer}>
          <Image
            source={{ uri: state.photo }}
            style={{ width: "100%", height: 240 }}
          />
        </View>
      ) : (
        <Camera style={styles.addContainer} ref={setCamera}>
          <TouchableOpacity onPress={takePhoto}>
            <View style={styles.addIconWrapper}>
              <FontAwesome name="camera" size={24} color="#BDBDBD" />
            </View>
          </TouchableOpacity>
        </Camera>
      )}
      <Text style={styles.addPictureTitle}>Завантажте фото</Text>
      <View>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={styles.sectionStyle}>
            <TextInput
              style={{
                ...styles.input,
                borderBottomColor:
                  isFocused === "title" ? "#FF6C00" : "#E8E8E8",
              }}
              placeholder="Назва..."
              placeholderTextColor="#BDBDBD"
              value={state.title}
              onFocus={() => onFocus("title")}
              onBlur={() => onBlur("title")}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, title: value }))
              }
            />
          </View>
          <View style={styles.sectionStyle}>
            <SimpleLineIcons name="location-pin" size={24} color="#BDBDBD" />
            <TextInput
              style={{
                ...styles.input,
                borderBottomColor:
                  isFocused === "locality" ? "#FF6C00" : "#E8E8E8",
              }}
              placeholder="Місцевість..."
              placeholderTextColor="#BDBDBD"
              value={state.locality}
              onFocus={() => onFocus("locality")}
              onBlur={() => onBlur("locality")}
              onChangeText={(value) =>
                setState((prevState) => ({
                  ...prevState,
                  locality: value,
                }))
              }
            />
          </View>
        </KeyboardAvoidingView>
      </View>
      <TouchableOpacity
        onPress={handleButtonClick}
        style={{
          ...styles.button,
          backgroundColor:
            state.locality && state.title ? "#FF6C00" : "#F6F6F6",
        }}
        activeOpacity={0.8}
      >
        <Text
          style={{
            ...styles.btnTitle,
            color: state.locality && state.title ? "#FFFFFF" : "#BDBDBD",
          }}
        >
          Опублікувати
        </Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => setState(initialState)}
          activeOpacity={0.6}
        >
          <Feather name="trash-2" size={24} color="#BDBDBD" />
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
  },
  addContainer: {
    width: "100%",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginBottom: 8,
    marginTop: 32,
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
  sectionStyle: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderBottomColor: "#E8E8E8",
    borderColor: "#fff",
    height: 50,
    width: "100%",
    marginBottom: 15,
  },
  input: {
    fontSize: 16,
    lineHeight: 19,
    height: 50,
    width: "100%",
    paddingVertical: 16,
  },

  button: {
    borderRadius: 100,
    height: 51,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 120,
  },
  btnTitle: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    lineHeight: 19,
  },
  deleteButton: {
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    height: 40,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 22,
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: "#fff",
  },
});

export default CreatePostsScreen;
