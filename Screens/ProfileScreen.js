import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { db } from "../config";
import { authSignOutUser } from "../redux/auth/authOperations";
import { collection, query, onSnapshot, where } from "firebase/firestore";

import { MaterialIcons } from "@expo/vector-icons";
import PostList from "../components/PostsList/PostsList";

const ProfileScreen = () => {
  const [userPosts, setUserPosts] = useState([]);
  const dispatch = useDispatch();
  const { userId, nickname } = useSelector((state) => state.auth);

  useEffect(() => {
    getUserPosts();
  }, []);

  const getUserPosts = async () => {
    try {
      const ref = query(
        collection(db, "posts"),
        where("userId", "==", `${userId}`)
      );
      onSnapshot(ref, (snapshot) => {
        setUserPosts(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <ImageBackground
        source={require("../assets/images/bgImage.png")}
        style={styles.bgImage}
      >
        <View style={styles.screenWrapper}>
          <TouchableOpacity
            style={styles.logoutBtn}
            onPress={() => {
              dispatch(authSignOutUser());
            }}
          >
            <MaterialIcons name="logout" size={24} color="#BDBDBD" />
          </TouchableOpacity>
          <View style={styles.avatar}>
            <MaterialIcons
              name="add-circle-outline"
              size={24}
              color="#FF6C00"
              style={styles.addButton}
            />
          </View>
          <Text style={styles.userName}>{nickname}</Text>
          <PostList posts={userPosts} />
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  screenWrapper: {
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  logoutBtn: {
    position: "absolute",
    top: 0,
    right: 0,
    marginTop: 22,
    marginRight: 16,
  },
  avatar: {
    marginTop: -60,
    marginBottom: 32,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  addButton: {
    position: "relative",
    right: -105,
    bottom: -80,
  },
  userName: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});

export default ProfileScreen;
