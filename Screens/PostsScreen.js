import { StyleSheet, Image, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { collection, query, onSnapshot, doc } from "firebase/firestore";
import { db } from "../config";
import PostList from "../components/PostsList/PostsList";
import { useSelector } from "react-redux";

const PostsScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const { email, nickname } = useSelector((state) => state.auth);

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    try {
      const ref = query(collection(db, "posts"));
      onSnapshot(ref, (snapshot) => {
        setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={styles.pageWrapper}>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/User.png")}
          style={styles.userImg}
        />
        <View style={styles.info}>
          <Text style={styles.userName}>{nickname}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      </View>
      <PostList navigation={navigation} posts={posts} />
    </View>
  );
};

const styles = StyleSheet.create({
  pageWrapper: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginTop: 32,
  },
  info: {
    flexDirection: "column",
    justifyContent: "center",
  },
  userImg: {
    marginLeft: 16,
    marginRight: 8,
  },
  userName: {
    fontFamily: "Roboto-Bolt",
    fontSize: 13,
    lineHeight: 15,
  },
  email: {
    fontSize: 11,
    lineHeight: 13,
    color: "#212121",
  },
});

export default PostsScreen;
