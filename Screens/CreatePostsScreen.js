import React, { useState, useEffect } from "react";
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
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const CreatePostScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [location, setLocation] = useState(null);

  const [photo, setPhoto] = useState(null);

  const [postTitle, setPostTitle] = useState("");
  const [locationTitle, setLocationTitle] = useState("");

  const postTitleHandler = (text) => setPostTitle(text);
  const locationHandler = (text) => setLocationTitle(text);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    //const location = await Location.getCurrentPositionAsync();
    setPhoto(photo.uri);

    
    console.log("photo", photo);

    //console.log("photo", photo);
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestBackgroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coords);
      console.log("latitude", location.coords.latitude);
    console.log("longitude", location.coords.longitude);

    })();
  }, []);

  const trash = () => {
    setPostTitle("");
    setLocationTitle("");
    setPhoto("");
    //setCamera(null);
  };

  const sendPhoto = () => {
    //console.log("navigation", navigation);
    navigation.navigate("PostsScreen", { photo, postTitle, locationTitle , location});
    trash();
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  poster: {
    width: 343,
    height: 240,
    backgroundColor: "#E8E8E8",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginTop: 32,
  },
  label: {
    marginRight: "auto",
    fontSize: 16,
    color: "#BDBDBD",

    marginBottom: 28,
  },
  input: {
    width: 343,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    fontSize: 16,
    marginBottom: 32,
  },
  button: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
    width: 343,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    alignItems: "center",
  },
  activeButton: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
    width: 343,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    alignItems: "center",
  },

  buttonText: {
    fontSize: 16,
    color: "#BDBDBD",
  },

  buttonActiveText: {
    fontSize: 16,
    color: "white",
  },

  inputContainer: {
    justifyContent: "center",
  },
  icon: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  cameraIcon: {
    width: 60,

    position: "absolute",
    right: 150,
    top: 80,
  },
  iconContainer: {
    position: "relative",
    width: 343,
    height: 240,
  },

  camera: {
    width: 343,
    height: 240,
    position: "relative",

    backgroundColor: "#E8E8E8",
    borderColor: "#E8E8E8",
    borderRadius: 20,
  },
  trash: {
    width: 24,
    marginTop: "auto",
  },

  innerContainer: {
    flex: 1,
    alignItems: "center",
    //justifyContent: "flex-end",
  },
  takePhotoContainer: {
    position: "relative",
    borderColor: "red",
    width: 343,
    height: 240,
    borderRadius: 20,
    // top: 50,
    // left: 10,
    // borderColor: "#fff",
    // borderWidth: 1,
  },
  postPhoto: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 20,
  },
});

export default CreatePostScreen;
