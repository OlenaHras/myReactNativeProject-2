import {
  Image,
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { db } from "../config";
import { collection, doc, addDoc, onSnapshot } from "firebase/firestore";
import { AntDesign } from "@expo/vector-icons";

const CommentsScreen = ({ route }) => {
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);
  const { postId, photo } = route.params;
  const { nickname } = useSelector((state) => state.auth);

  useEffect(() => {
    getAllComments();
  }, []);

  const createComment = async () => {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    try {
      const postDocRef = await doc(db, "posts", postId);
      await addDoc(collection(postDocRef, "comments"), {
        comment,
        nickname,
        date,
        time,
      });

      Keyboard.dismiss();
      setComment("");
    } catch (error) {
      console.log(error.message);
    }
  };

  const getAllComments = async () => {
    try {
      const ref = await doc(db, "posts", postId);
      onSnapshot(collection(ref, "comments"), (snapshot) => {
        setAllComments(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Image source={{ uri: photo }} style={styles.image} />
      <FlatList
        data={allComments}
        style={styles.comments}
        renderItem={({ item, index }) => (
          <View
            style={[
              index % 2 === 0
                ? styles.reverseContainer
                : styles.commentContainer,
            ]}
          >
            <View style={styles.userAvatar} />
            <View style={styles.commentItem}>
              <Text style={styles.commentText}>{item.comment}</Text>
              <Text style={styles.commentTime}>
                {item.date} | {item.time}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.inputWrapper} behavior="position">
        <TextInput
          style={styles.input}
          onChangeText={(value) => setComment(value)}
          value={comment}
          placeholder="Коментувати..."
        />
        <TouchableOpacity style={styles.button} onPress={createComment}>
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
  comments: {
    marginTop: 32,
  },
  commentContainer: {
    marginHorizontal: 16,
    flexDirection: "row",
  },
  reverseContainer: {
    marginHorizontal: 16,
    flexDirection: "row-reverse",
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "grey",
  },
  commentItem: {
    marginLeft: 16,
    marginBottom: 24,
    width: 299,
    minHeight: 69,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    alignItems: "flex-end",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopRightRadius: 6,
  },
  commentText: {
    fontSize: 13,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  commentTime: {
    fontSize: 10,
    color: "#BDBDBD",
    marginBottom: 16,
    marginRight: 16,
  },

  userAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "grey",
  },
  commentItem: {
    marginRight: 16,
    marginBottom: 24,
    width: 299,
    minHeight: 69,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    alignItems: "flex-start",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 6,
  },
  commentText: {
    fontSize: 13,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  commentTime: {
    fontSize: 10,
    color: "#BDBDBD",
    marginBottom: 16,
    marginLeft: 16,
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
