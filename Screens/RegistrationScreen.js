import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Button,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

export default function RegistrationScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");

  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);
  const loginHandler = (text) => setLogin(text);

  const onLogin = () => {
    Alert.alert("Ваші данні", `${email} + ${password}`);
    console.log("email:", email && "password:", password);
  };

  //const image = { uri: "https://docs.expo.dev/static/images/tutorial/splash.png" };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.profileBox}>
          <Image style={styles.addIcon} source={require("../img/add.png")} />
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <Text style={styles.title}>Реєстрація</Text>
          <TextInput
            value={login}
            onChangeText={loginHandler}
            placeholder="Логін"
            style={styles.input}
          />
          <TextInput
            value={email}
            onChangeText={emailHandler}
            placeholder="Адреса електронної пошти"
            style={styles.input}
          />
          <TextInput
            value={password}
            onChangeText={passwordHandler}
            placeholder="Пароль"
            secureTextEntry={true}
            style={styles.input}
          />
<Text style={styles.showPassw}>Показати</Text>

          <TouchableOpacity style={styles.button} onPress={onLogin}>
            <Text style={styles.text}>Зареєструватись</Text>
          </TouchableOpacity>
          {/* <Button title={"Увійти"} color="#FF6C00" style={styles.button} onPress={onLogin} /> */}
          <Text style={styles.link}>Вже є аккаунт? Увійти</Text>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     alignItems: "center",
     justifyContent: "flex-end",
    // backgroundColor: "#ecf0f1",
    // maxHeight: 549,
     //marginTop: 263,
  },
  title: {
    fontSize: 30,
    marginBottom: 33,
    textAlign: "center",
  },
  input: {
    width: 343,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    marginBottom: 10,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    position: "relative",

    
  },
 
  button: {
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    marginTop: 43,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  link: {
    fontSize: 16,
    weight: 400,
    marginBottom: 92,
    marginTop: 16,
    textAlign: "center",
    color: " #1B4371",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
    padding: 16,
  },
  addIcon: {
    position: "absolute",
    top: 81,
    left: 107,
  },

  profileBox: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    position: "relative",
  },
  showPassw: {
    position: "absolute",
    left: 263,
    top: 208,

  },
});
