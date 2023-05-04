import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet, Image, Text } from "react-native";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// import { HeaderBackButton } from "react-navigation/stack";
import { HeaderBackButton } from "@react-navigation/elements";
const TabStack = createBottomTabNavigator();
const Stack = createStackNavigator();

const Home = ({ navigation }) => {
  return (
    // <PostsScreen />
    <View style={styles.container}>
      <TabStack.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            paddingHorizontal: 39,
            height: 83,
            paddingBottom: 11,
          },
        }}
      >
        <TabStack.Screen
          name="Публикации"
          component={PostsScreen}
          options={{
            headerRight: () => (
              <Image
                source={require("../assets/images/log-out.png")}
                style={{
                  width: 24,
                  height: 24,
                  marginRight: 10,
                }}
              />
            ),
            headerStyle: {
              borderBottomColor: "#E8E8E8",
              height: 88,
              // marginBottom: 32,
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
          name="Создать публикацию"
          component={CreatePostsScreen}
          options={{
            headerLeft: () => (
              <HeaderBackButton
                onPress={() => {
                  console.log("clicked");
                  navigation.goBack();
                }}
              />
            ),
            title: "Создать публикацию",
            tabBarStyle: { display: "none" },
            headerTitleAlign: "center",
            tabBarIcon: (focused, size, color) => {
              return (
                <View style={styles.createBtn}>
                  <Image
                    source={require("../assets/images/create.png")}
                    style={{
                      width: 13,
                      height: 13,
                    }}
                  />
                </View>
              );
            },
          }}
        />

        <TabStack.Screen
          name="Профиль"
          component={ProfileScreen}
          options={{
            headerLeft: () => (
              <HeaderBackButton
                onPress={() => {
                  console.log("clicked");
                  navigation.goBack();
                }}
              />
            ),
            // headerLeft: true,
            headerShown: true,
            title: "Профиль",
            tabBarStyle: { display: "none" },
            headerTitleAlign: "center",
            tabBarIcon: (focused, size, color) => {
              return (
                <Image
                  source={require("../assets/images/profile.png")}
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
              );
            },
          }}
        />
      </TabStack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // position: "relative",
    flex: 1,
    // flexDirection: "column",
    backgroundColor: "#ffffff",
  },
  createBtn: {
    borderRadius: 20,
    backgroundColor: "#FF6C00",
    paddingHorizontal: 28.5,
    paddingVertical: 13.5,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     position: "relative",
//     flex: 1,
//     flexDirection: "column",
//     backgroundColor: "#fff",
//   },
//   header: {
//     flexDirection: "row",
//     borderWidth: 1,
//     height: 88,
//     borderColor: "#fff",
//     alignItems: "flex-end",
//     justifyContent: "flex-end",
//     borderBottomColor: "#BDBDBD",
//     paddingBottom: 11,
//     marginBottom: 32,
//   },
//   headerText: {
//     fontFamily: "Roboto-Medium",
//     fontSize: 17,
//     lineHeight: 22,
//   },
//   logOutImg: {
//     marginLeft: 100,
//     marginRight: 10,
//   },
//   footer: {
//     position: "absolute",
//     left: 0,
//     bottom: 0,
//     height: 83,
//     width: "100%",
//     borderWidth: 1,
//     borderColor: "#fff",
//     borderTopColor: "#BDBDBD",
//   },
// });

export default Home;
