import { StyleSheet, Image, Text, View } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import PostsScreen from "./PostsScreen";
// import Home from "./Home";
// import CreatePostsScreen from "./CreatePostsScreen";
// import ProfileScreen from "./ProfileScreen";
// const TabStack = createBottomTabNavigator();
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
    </View>
  );
};

const styles = StyleSheet.create({
  pageWrapper: {
    backgroundColor: "#fff",
    width: "100%",
    // borderTopColor: "#E8E8E8",
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
