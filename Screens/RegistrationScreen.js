import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { styles } from "./ScreensStyles/Registration_styles";
import { useDispatch } from "react-redux";

import { authSignUpUser } from "../redux/auth/authOperations";

const initialState = {
  email: "",
  password: "",
  login: "",
};

const RegistrationScreen = ({ navigation }) => {
  const [state, setstate] = useState(initialState);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(authSignUpUser(state));
    setstate(initialState);
    navigation.navigate("Home");
  };

  return (
    <ImageBackground
      source={require("../img/PhotoBG.jpg")}
      style={styles.backImg}
    >
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.profileBox}>
            <Image style={styles.addIcon} source={require("../img/add.png")} />
          </View>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <View>
                <Text style={styles.title}>Реєстрація</Text>
                <TextInput
                  value={state.login}
                  onChangeText={(value) =>
                    setstate((prevState) => ({ ...prevState, login: value }))
                  }
                  placeholder="Логін"
                  style={styles.input}
                />
                <TextInput
                  value={state.email}
                  onChangeText={(value) =>
                    setstate((prevState) => ({ ...prevState, email: value }))
                  }
                  placeholder="Адреса електронної пошти"
                  style={styles.input}
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

                <TouchableOpacity
                  style={styles.button}
                  onPress={handleSubmit}
                >
                  <Text style={styles.text}>Зареєструватись</Text>
                </TouchableOpacity>
                {/* <Button title={"Увійти"} color="#FF6C00" style={styles.button} onPress={onLogin} /> */}
                <Text
                  style={styles.link}
                  onPress={() => navigation.navigate("Login")}
                >
                  Вже є аккаунт? Увійти
                </Text>
              </View>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </ImageBackground>
  );
};


export default RegistrationScreen;
