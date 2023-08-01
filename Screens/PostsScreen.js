import { StyleSheet, Image, Text, View } from "react-native";

import PostList from "../components/PostsList/PostsList";

const PostsScreen = () => {
  return (
    <View style={styles.pageWrapper}>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/User.png")}
          style={styles.userImg}
        />
        <View style={styles.info}>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.email}>email@example.com</Text>
        </View>
      </View>
      <PostList />
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
