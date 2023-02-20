import React, { useState, useEffect } from "react";

import { styles } from "./ScreensStyles/CreatePost_styles";

import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Image,
  Button,
  Dimensions,
} from "react-native";
import { Camera } from "expo-camera";
//import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import * as Location from "expo-location";

import db from "../firebase/config";

const CreatePostScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [location, setLocation] = useState(null);

  const [photo, setPhoto] = useState(null);

  const [postTitle, setPostTitle] = useState("");
  const [locationTitle, setLocationTitle] = useState("");

  const { userId, login } = useSelector((state) => state.auth);

  const postTitleHandler = (text) => setPostTitle(text);
  const locationHandler = (text) => setLocationTitle(text);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestBackgroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let locationRes = await Location.getCurrentPositionAsync({});
      setLocation(locationRes);
    })();
  }, []);

  const takePhoto = async () => {
  
    const { uri } = await camera.takePictureAsync();
    setPhoto(uri);
    
  };

  const trash = () => {
    setPostTitle("");
    setLocationTitle("");
    setPhoto("");
    //setCamera(null);
  };

  const sendPhoto = () => {
   
    uploadPostToServer();
    //navigation.navigate("PostsScreen", { photo, postTitle, locationTitle , location});
    navigation.navigate("PostsScreen");
    trash();
  };

  const uploadPostToServer = async () => {
    const photo = await uploadPhotoToServer();
    const createPost = await db
      .firestore()
      .collection("posts")
      .add({ photo, locationTitle, userId, login, location: location.coords});
      
  };

  const uploadPhotoToServer = async () => {
    const response = await fetch(photo);
    const file = await response.blob();

    const uniquePostId = Date.now().toString();

    await db.storage().ref(`postImage/${uniquePostId}`).put(file);

    const processedPhoto = await db
      .storage()
      .ref("postImage")
      .child(uniquePostId)
      .getDownloadURL();

    //console.log("processedPhoto", processedPhoto);
    return processedPhoto;
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <Camera style={styles.camera} ref={setCamera}>
            {photo && (
              <View style={styles.takePhotoContainer}>
                <Image
                  source={{ uri: photo }}
                  style={{ height: 240, width: 343 }}
                />
              </View>
            )}

            <TouchableOpacity onPress={takePhoto} style={styles.iconContainer}>
              <Image
                source={require("../img/camera.png")}
                style={styles.cameraIcon}
              />
            </TouchableOpacity>
          </Camera>

          <Text style={styles.label}>Завантажити фото</Text>
          <TextInput
            value={postTitle}
            onChangeText={postTitleHandler}
            placeholder="Назва..."
            placeholderTextColor="#BDBDBD"
            style={styles.input}
          />
          <View style={styles.inputContainer}>
            <TextInput
              value={locationTitle}
              onChangeText={locationHandler}
              placeholder="Місцевість"
              style={styles.input}
            />
            <Image style={styles.icon} source={require("../img/mapPin.png")} />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>

      {postTitle && locationTitle && photo ? (
        <TouchableOpacity style={styles.activeButton} onPress={sendPhoto}>
          <Text style={styles.buttonActiveText}>Запостити</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Запостити</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.innerContainer} onPress={trash}>
        <Image style={styles.trash} source={require("../img/trash.png")} />
      </TouchableOpacity>
    </View>
  );
};


export default CreatePostScreen;
