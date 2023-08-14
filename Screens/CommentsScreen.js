import {
  Image,
  View,
  StyleSheet,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const CommentsScreen = ({ route }) => {
  const [newComment, setNewComment] = useState("");

  const handleButtonClick = () => {
    console.log(newComment);
    Keyboard.dismiss();
    setNewComment("");
  };

  return (
    <View style={styles.wrapper}>
      <Image source={{ uri: route.params }} style={styles.image} />
      <View style={styles.inputWrapper} behavior="position">
        <TextInput
          style={styles.input}
          onChangeText={(value) => setNewComment(value)}
          value={newComment}
          placeholder="Коментувати..."
        />
        <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
          <AntDesign name="arrowup" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 32,
    height: "100%",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  image: {
    width: 343,
    height: 240,
  },
  inputWrapper: {
    position: "absolute",
    flexDirection: "row",

    bottom: 16,
    width: 343,
    backgroundColor: "#F6F6F6",
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 25,
  },
  input: {
    alignItems: "flex-end",
    width: "85%",
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#BDBDBD",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 50,
    width: 34,
    height: 34,
    margin: 8,
  },
});
export default CommentsScreen;
