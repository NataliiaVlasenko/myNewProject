import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList
} from "react-native";
import { useSelector } from "react-redux";
import db from "../firebase/config";
import { styles } from "./ScreensStyles/Comment_Styles";

const CommentsScreen = ({ route }) => {
  const { postId } = route.params;
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);
  const { login } = useSelector((state) => state.auth);
  const {uri} = route.params;
  console.log(uri);


  useEffect(() => {
    getAllPosts();
  }, []);

  const createPost = async () => {
    db.firestore()
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .add({ comment, login });
      
  };
  const getAllPosts = async () => {
    db.firestore()
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .onSnapshot((data) =>
        setAllComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
  };
  return (
    <View style={styles.container}>
      <View>
      <Image source={{uri}} style={styles.poster} />
    </View>
    <SafeAreaView style={styles.container}>
        <FlatList
          data={allComments}
          renderItem={({ item }) => (
            <View style={styles.commentContainer}>
              <Text style={styles.commentAuthor}>{item.login}:</Text>
              <Text style={styles.commentText}>{item.comment}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} onChangeText={setComment} />
      </View>
      <TouchableOpacity onPress={createPost} style={styles.sendBtn}>
        <Text style={styles.buttonText}>Comment</Text>
      </TouchableOpacity>
    </View>
  );
};



export default CommentsScreen;