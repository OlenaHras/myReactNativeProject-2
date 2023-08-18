import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Feather, SimpleLineIcons, AntDesign } from "@expo/vector-icons";

const PostList = ({ navigation, posts }) => {
  return (
    <View style={styles.listWrapper}>
      <SafeAreaView>
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <View style={styles.postWrapper}>
              <Image source={{ uri: item.photo }} style={styles.postImg} />
              <Text style={styles.postTitle}>{item.title}</Text>
              <View style={styles.postInfo}>
                <View style={styles.rating}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Коментарі", {
                        photo: item.photo,
                        postId: item.id,
                      });
                    }}
                  >
                    <View style={{ ...styles.postComments, marginRight: 24 }}>
                      <Feather
                        name="message-circle"
                        size={24}
                        color="#BDBDBD"
                      />
                      <Text>0</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.postComments}>
                      <AntDesign name="like2" size={24} color="#BDBDBD" />
                      <Text>0</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Мапа", { location: item.location });
                  }}
                >
                  <View style={styles.postComments}>
                    <SimpleLineIcons
                      name="location-pin"
                      size={24}
                      color="#BDBDBD"
                    />
                    <Text>{item.locality}</Text>
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
  postImg: {
    width: 343,
    height: 240,
    borderRadius: 8,
  },
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
  rating: {
    flexDirection: "row",
  },
});

export default PostList;
