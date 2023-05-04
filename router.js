import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View, StyleSheet } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import Home from "./Screens/Home";
import PostsScreen from "./Screens/PostsScreen";
import CreatePostsScreen from "./Screens/CreatePostsScreen";
import ProfileScreen from "./Screens/ProfileScreen";
// import posts from "./assets/images/posts.png";
const MainStack = createStackNavigator();
const TabStack = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      // <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    );
  }
  return (
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
        name="Публикации "
        component={Home}
        options={{
          tabBarIcon: (focused, size, color) => {
            return (
              <Image
                source={require("./assets/images/posts.png")}
                style={{
                  width: 24,
                  height: 24,
                  //   borderRadius: size,
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
          tabBarIcon: (focused, size, color) => {
            return (
              <View style={styles.createBtn}>
                <Image
                  source={require("./assets/images/create.png")}
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
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: (focused, size, color) => {
            return (
              <Image
                source={require("./assets/images/profile.png")}
                style={{
                  width: 24,
                  height: 24,
                  //   borderRadius: size,
                }}
              />
            );
          },
        }}
      />
    </TabStack.Navigator>
  );
};

const styles = StyleSheet.create({
  createBtn: {
    borderRadius: 20,
    backgroundColor: "#FF6C00",
    paddingHorizontal: 28.5,
    paddingVertical: 13.5,
  },
});
