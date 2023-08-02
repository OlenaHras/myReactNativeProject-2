import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const ProfileScreen = ({ navigation }) => {
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
              navigation.navigate("Login");
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
          <Text style={styles.userName}>Natali Romanova</Text>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    position: "absolute",
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
    left: "42%",
    bottom: "77%",
  },
  avatar: {
    position: "relative",
    marginTop: -570,
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
