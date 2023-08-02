import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet } from "react-native";
import { HeaderBackButton } from "@react-navigation/elements";
import { Feather, AntDesign, MaterialIcons } from "@expo/vector-icons";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const TabStack = createBottomTabNavigator();

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TabStack.Navigator
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
          name="Публікації"
          id="Публікації"
          component={PostsScreen}
          options={{
            headerRight: () => (
              <HeaderBackButton
                onPress={() => {
                  navigation.navigate("Login");
                }}
                backImage={(focused, size, color) => {
                  return (
                    <View>
                      <MaterialIcons name="logout" size={24} color="#BDBDBD" />
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
                <Feather name="grid" size={24} color="rgba(33, 33, 33, 0.80)" />
              );
            },
          }}
        />

        <TabStack.Screen
          name="Створити публікацію"
          id="Створити публікацію"
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
                  navigation.navigate("Публікації");
                }}
              />
            ),
            title: "Створити публікацію",
            tabBarStyle: { display: "none" },
            headerTitleAlign: "center",
            tabBarIcon: (focused, size, color) => {
              return (
                <View style={styles.activeBtn}>
                  <AntDesign name="plus" size={24} color="#FFFFFF" />
                </View>
              );
            },
          }}
        />

        <TabStack.Screen
          name="Профіль"
          id="Профіль"
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
            headerShown: false,
            headerTitleAlign: "center",
            tabBarIcon: (focused, size, color) => {
              return (
                <Feather name="user" size={24} color="rgba(33, 33, 33, 0.80)" />
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
    flex: 1,
    backgroundColor: "#ffffff",
  },
  activeBtn: {
    borderRadius: 20,
    width: 70,
    height: 40,
    color: "#fff",
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
