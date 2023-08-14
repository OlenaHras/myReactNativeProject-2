import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";

const PostList = ({ navigation, posts }) => {
  return (
    <View style={styles.listWrapper}>
      <SafeAreaView>
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <View style={styles.postWrapper}>
              <Image
                source={{ uri: item.state.photo }}
                style={{ width: 343, height: 240 }}
              />
              <Text style={styles.postTitle}>{item.state.title}</Text>
              <View style={styles.postInfo}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Коментарі", item.state.photo);
                  }}
                >
                  <View style={styles.postComments}>
                    <Feather name="message-circle" size={24} color="#BDBDBD" />
                    {/* <Text>{item.comments}</Text> */}
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Мапа", item.coords);
                  }}
                >
                  <View style={styles.postComments}>
                    <SimpleLineIcons
                      name="location-pin"
                      size={24}
                      color="#BDBDBD"
                    />
                    <Text>{item.state.locality}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={(item, i) => i.toString()}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  listWrapper: {
    flex: 1,
    alignItems: "center",
    marginTop: 32,
  },
  postWrapper: {
    flex: 1,
    marginBottom: 34,
  },
  postImg: {},
  postTitle: {
    marginVertical: 8,
  },
  postComments: {
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
  },
  postInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default PostList;
