import React, { useState } from "react";
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
  Button
} from "react-native";
import { Feather } from "@expo/vector-icons";


const CreatePostScreen = ({ navigation }) => {

  const iconName = "trash-2";


  const [postTitle, setPostTitle] = useState("");
  const [location, setLocation] = useState("");

  const postTitleHandler = (text) => setPostTitle(text);
  const locationHandler = (text) => setLocation(text);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={styles.poster}></View>
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
              value={location}
              onChangeText={locationHandler}
              placeholder="Місцевість"
              style={styles.input}
            />
            <Image style={styles.icon}  source={require("../img/mapPin.png")} size={24} />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("PostsScreen", {
            postTitle: postTitle,
            location: location,
          })
        }
      >
        <Text style={styles.buttonText}>Запостити</Text>
      </TouchableOpacity>
<View>
<Feather name={iconName} size="24 "color="#E8E8E8" />
</View>
     
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 16,
  },
  poster: {
    width: 343,
    height: 240,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginTop: 32,
  },
  label: {
    marginRight: "auto",
    fontSize: 16,
    color: "#BDBDBD",

    marginBottom: 48,
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
  buttonText: {
    fontSize: 16,
    color: "#BDBDBD",
  },
  inputContainer: {
    justifyContent: "center",
  },
  icon: {
    position: "absolute",
    right: 0,
    top: 0,
  },
});

export default CreatePostScreen;
