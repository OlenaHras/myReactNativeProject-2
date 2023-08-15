import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View, StyleSheet } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import Home from "./Screens/Home";
import CommentsScreen from "./Screens/CommentsScreen";
import MapScreen from "./Screens/MapScreen";
// import PostsScreen from "./Screens/PostsScreen";
// import CreatePostsScreen from "./Screens/CreatePostsScreen";
// import ProfileScreen from "./Screens/ProfileScreen";
// import posts from "./assets/images/posts.png";
const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();
// const TabStack = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      // <NavigationContainer>
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="Коментарі"
        component={CommentsScreen}
        options={{
          headerTitleAlign: "center",
          cardStyle: { backgroundColor: "#FFFFFF" },
        }}
      />
      <MainStack.Screen
        name="Мапа"
        component={MapScreen}
        options={{
          headerTitleAlign: "center",
          cardStyle: { backgroundColor: "#FFFFFF" },
        }}
      />
    </MainStack.Navigator>
    // <TabStack.Navigator
    //   screenOptions={{
    //     tabBarShowLabel: false,
    //     tabBarStyle: {
    //       paddingHorizontal: 39,
    //       height: 83,
    //       paddingBottom: 11,
    //     },
    //   }}
    // >
    //   <TabStack.Screen
    //     name="Публикации "
    //     component={Home}
    //     options={{
    //       tabBarIcon: (focused, size, color) => {
    //         return (
    //           <Image
    //             source={require("./assets/images/posts.png")}
    //             style={{
    //               width: 24,
    //               height: 24,
    //               //   borderRadius: size,
    //             }}
    //           />
    //         );
    //       },
    //     }}
    //   />

    //   <TabStack.Screen
    //     name="Создать публикацию"
    //     component={CreatePostsScreen}
    //     options={{
    //       tabBarIcon: (focused, size, color) => {
    //         return (
    //           <View style={styles.createBtn}>
    //             <Image
    //               source={require("./assets/images/create.png")}
    //               style={{
    //                 width: 13,
    //                 height: 13,
    //               }}
    //             />
    //           </View>
    //         );
    //       },
    //     }}
    //   />

    //   <TabStack.Screen
    //     name="Profile"
    //     component={ProfileScreen}
    //     options={{
    //       tabBarIcon: (focused, size, color) => {
    //         return (
    //           <Image
    //             source={require("./assets/images/profile.png")}
    //             style={{
    //               width: 24,
    //               height: 24,
    //               //   borderRadius: size,
    //             }}
    //           />
    //         );
    //       },
    //     }}
    //   />
    // </TabStack.Navigator>
  );
};

// const styles = StyleSheet.create({
//   createBtn: {
//     borderRadius: 20,
//     backgroundColor: "#FF6C00",
//     paddingHorizontal: 28.5,
//     paddingVertical: 13.5,
//   },
// });
