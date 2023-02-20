import React, { useState, useEffect } from "react";
import { styles } from "./ScreensStyles/Posts_styles";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import db from "../firebase/config";
import { useSelector } from "react-redux";
import { Feather } from "@expo/vector-icons";

const PostsScreen = ({ navigation, route }) => {

  const { login } = useSelector((state) => state.auth);

  const [posts, setPosts] = useState([]);
  
  const getAllPost = async () => {
    await db
      .firestore()
      .collection("posts")
      .onSnapshot((data) =>
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
  };

  useEffect(() => {
    getAllPost();
  }, []);

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.innerCont} onPress={() => navigation.navigate("ProfileScreen")}>
      <View style={styles.profileBox}>
      <Feather name="user" size={44} color="black" />
      </View>

      <View style={styles.profileDescrBox}>
        <Text style={styles.profileDescr}>UserLogin: {login}</Text>
        <Text style={styles.profileDescr}>userEmail</Text>
      </View>
            
      </TouchableOpacity>

      <FlatList
        data={posts}
        style={styles.list}
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
                onPress={() => navigation.navigate("CommentsScreen", { postId: item.id, uri: item.photo })}
              />

              <TouchableOpacity
                style={styles.locationContainer}
                onPress={() => navigation.navigate("MapScreen", { location: item.location })}
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


export default PostsScreen;
