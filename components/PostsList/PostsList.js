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

const example = [
  {
    id: "1",
    img: require("../../assets/images/testPostImg.png"),
    title: "Ліс",
    location: "Ivano-Frankivsk Region, Ukraine",
    comments: 0,
  },
  {
    id: "2",
    img: require("../../assets/images/testPostImg.png"),
    title: "Гори",
    location: "Ukraine",
    comments: 0,
  },
];

const PostList = ({ navigation }) => {
  return (
    <View style={styles.listWrapper}>
      <SafeAreaView>
        <FlatList
          data={example}
          renderItem={({ item }) => (
            <View style={styles.postWrapper}>
              <Image source={item.img} />
              <Text style={styles.postTitle}>{item.title}</Text>
              <View style={styles.postInfo}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Коментарі");
                  }}
                >
                  <View style={styles.postComments}>
                    <Feather name="message-circle" size={24} color="#BDBDBD" />
                    <Text>{item.comments}</Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.postComments}>
                  <SimpleLineIcons
                    name="location-pin"
                    size={24}
                    color="#BDBDBD"
                  />
                  <Text>{item.location}</Text>
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
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
