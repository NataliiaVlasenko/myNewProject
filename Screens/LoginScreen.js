import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { styles } from "./ScreensStyles/Login_styles";
const initialState = {
  email: "",
  password: "",
};
import { useDispatch } from "react-redux";
import { authSignInUser } from "../redux/auth/authOperations";

const LoginScreen = ({ navigation, route}) => {
  const [state, setstate] = useState(initialState);
  const [user, setUser] = useState({});

  // Alert.alert("Ваші данні", `${state.email} + ${state.password}`);
  // console.log("email:", state.email && "password:", state.password);

  useEffect(() => {
    if (route.params) {
      setUser((prevState) => [...prevState, route.params]);
      //console.log (user);
    }
  }, [route.params]);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(authSignInUser(state));
    setstate(initialState);    
  };

   return (
    <ImageBackground
      source={require("../img/PhotoBG.jpg")}
      style={styles.backImg}
    >
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <Text style={styles.title}>Увійти</Text>
              <TextInput
                value={state.email}
                onChangeText={(value) =>
                  setstate((prevState) => ({ ...prevState, email: value }))
                }
                placeholder="Адреса електронної пошти"
                style={styles.input}
                //style={[{borderColor: color},styles.input]}
              />
              <TextInput
                value={state.password}
                onChangeText={(value) =>
                  setstate((prevState) => ({ ...prevState, password: value }))
                }
                placeholder="Пароль"
                secureTextEntry={true}
                style={styles.input}
              />

              <Text style={styles.showPassw}>Показати</Text>

              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.text}>Увійти</Text>
              </TouchableOpacity>
              {/* <Button title={"Увійти"} color="#FF6C00" style={styles.button} onPress={onLogin} /> */}
              <Text
                style={styles.link}
                onPress={() => navigation.navigate("Registration")}
              >
                Немає аккаунта? Зареєструватись
              </Text>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </ImageBackground>
  );
};



export default LoginScreen;
