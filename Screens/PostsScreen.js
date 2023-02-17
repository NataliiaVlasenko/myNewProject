import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  FlatList,
  Image,
  
  TouchableOpacity
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const PostsScreen = ({ navigation, route }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  console.log("posts", posts);
  //console.log("location", route.location);

 

  // const { postTitle } = route.params;
  // const { location } = route.params;
  // const { postPhoto } = route.params;

  //Alert.alert(`${postPhoto} ,${postTitle} , ${location} `);
  //console.log(postTitle,location, postPhoto)

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          
          <View>
            <Image source={{ uri: item.photo }} style={styles.poster} />
            <Text style={styles.postTitle}>{item.postTitle}</Text>

            <View style={styles.postDescription}>
              <EvilIcons
                name="comment"
                size={24}
                color="gray"
                style={styles.commentIcon}
                onPress={() => navigation.navigate("CommentsScreen",  {item})}
              />

              <TouchableOpacity
                style={styles.locationContainer}
                onPress={() => navigation.navigate("MapScreen",  {item})}
              >
                <EvilIcons name="location" size={24} color="gray" />
                <Text>{item.locationTitle}</Text>
              </TouchableOpacity>
              
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
  },
  poster: {
    width: 343,
    height: 240,
    borderRadius: 8,
    marginTop: 16,
  },
  postTitle: {
    marginRight: "auto",
    fontSize: 16,
    weight: "bold",
  },

  postDescription: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  commentIcon: {
    marginRight: "auto",
    marginVertical: 12,
  },

  locationContainer: {
    flex: 1,
    flexDirection: "row",
    marginLeft: "auto",
    borderBottom: 1,

    justifyContent: "flex-end",
  },
});

export default PostsScreen;
