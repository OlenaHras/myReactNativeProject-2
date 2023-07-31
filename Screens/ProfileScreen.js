// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { HeaderBackButton } from "@react-navigation/elements";
import { Text, View, ImageBackground, StyleSheet, Image } from "react-native";
// import PostsScreen from "./PostsScreen";
// import Home from "./Home";
// import CreatePostsScreen from "./CreatePostsScreen";
// import ProfileScreen from "./ProfileScreen";
// const TabStack = createBottomTabNavigator();

const ProfileScreen = () => {
  return (
    <>
      <ImageBackground
        source={require("../assets/images/bgImage.png")}
        style={styles.bgImage}
      >
        <View style={styles.screenWrapper}>
          <View style={styles.avatar}>
            {/* <View style={styles.addButton}>
              <Image
                source={require("../assets/images/addButton.png")}
                style={{ width: 13, height: 13 }}
              />
            </View> */}
          </View>
          <Text style={styles.userName}>Natali Romanova</Text>
        </View>
      </ImageBackground>
      {/* <TabStack.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            paddingHorizontal: 39,
            height: 71,
          },
          tabBarActiveBackgroundColor: "none",
        }}
      >
        <TabStack.Screen
          name="Публікації "
          component={PostsScreen}
          options={{
            headerRight: () => (
              <HeaderBackButton
                onPress={() => {
                  navigation.navigate("Home");
                }}
                backImage={(focused, size, color) => {
                  return (
                    <View>
                      <Image
                        source={require("../assets/images/log-out.png")}
                        style={{
                          width: 24,
                          height: 24,
                          marginRight: 10,
                        }}
                      />
                    </View>
                  );
                }}
              />
            ),
            headerStyle: {
              borderBottomColor: "#E8E8E8",
              borderBottomWidth: 2,
              height: 88,
            },
            headerTitleAlign: "center",

            tabBarIcon: (focused, size, color) => {
              return (
                <Image
                  source={require("../assets/images/posts.png")}
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
              );
            },
          }}
        />

        <TabStack.Screen
          name="Профіль"
          component={ProfileScreen}
          options={{
            // headerLeft: () => (
            //   <HeaderBackButton
            //     onPress={() => {
            //       console.log("clicked");
            //       navigation.goBack();
            //     }}
            //   />
            // ),
            headerShown: false,
            tabBarStyle: { display: "none" },
            headerTitleAlign: "center",
            tabBarIcon: (focused, size, color) => {
              return (
                <View style={styles.profileIcon}>
                  <Image
                    source={require("../assets/images/profile.png")}
                    style={{
                      width: 24,
                      height: 24,
                    }}
                  />
                </View>
              );
            },
          }}
        />
        <TabStack.Screen
          name="Створити публікацію "
          component={CreatePostsScreen}
          options={{
            headerStyle: {
              borderBottomColor: "#E8E8E8",
              borderBottomWidth: 2,
              height: 88,
            },
            headerLeft: () => (
              <HeaderBackButton
                onPress={() => {
                  navigation.goBack();
                }}
              />
            ),
            title: "Створити публікацію",
            tabBarStyle: { display: "none" },
            headerTitleAlign: "center",
            tabBarIcon: (focused, size, color) => {
              return (
                // <View style={styles.createBtn}>
                <Image
                  source={require("../assets/images/add.svg")}
                  style={{
                    width: 13,
                    height: 13,
                  }}
                />
                // </View>
              );
            },
          }}
        />
      </TabStack.Navigator> */}
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
    // marginTop: 50,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatar: {
    position: "relative",
    // top: 60,
    marginTop: -570,
    marginBottom: 32,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  // addButton: {
  //   width: 25,
  //   height: 25,
  //   borderColor: "#FF6C00",
  //   borderRadius: 50,
  //   borderWidth: 1,
  //   position: "relative",
  //   right: -105,
  //   bottom: -80,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
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
  // profileIcon: {
  //   color: "#212121",
  //   borderRadius: 20,
  //   backgroundColor: "#FF6C00",
  //   paddingHorizontal: 28.5,
  //   paddingVertical: 13.5,
  // },
});

export default ProfileScreen;
