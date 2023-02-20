import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList , Image, Text, TouchableOpacity} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useSelector } from "react-redux";
//import { authSignOutUser } from "../redux/auth/authOperations";
import { EvilIcons } from "@expo/vector-icons";
import db from "../firebase/config";
import { styles } from "./ScreensStyles/Profile_styles";

const ProfileScreen = ({navigation}) => {
  
  const [userPosts, setUserPosts] = useState([]);
  const { userId } = useSelector((state) => state.auth);

  useEffect(() => {
    getUserPosts();
  }, []);

  const getUserPosts = async () => {
    await db
      .firestore()
      .collection("posts")
      .where("userId", "==", userId)
      .onSnapshot((data) =>
        setUserPosts(data.docs.map((doc) => ({ ...doc.data() })))
      );
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileBox}>
        <Feather name="user" size={60} color="black" />
      </View>
      
      <View>
        
<FlatList
        data={userPosts}
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
    </View>
  );
};


export default ProfileScreen;
