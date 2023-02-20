import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
//import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";
import Home from "./Screens/Home";
import PostsScreen from "./Screens/PostsScreen";
import CreatePostsScreen from "./Screens/CreatePostsScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import MapScreen from "./Screens/MapScreen";
import CommentsScreen from "./Screens/CommentsScreen";

const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();

import { authSignOutUser } from "./redux/auth/authOperations";
import { useDispatch } from "react-redux";

export const useRoute = (isAuth) => {

  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(authSignOutUser());
  };

   if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen name="Registration" component={RegistrationScreen} />

        <AuthStack.Screen name="Login" component={LoginScreen} />
      </AuthStack.Navigator>
    );
  }

  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
       
        component={Home}
        options={{
          title: "Публікації",
          headerRight: () => (
            <TouchableOpacity
            onPress={signOut}
            >
              <View>
                <Image
                  source={require("./img/logout.png")}
                  style={styles.exitIcon}
                  
                />
              </View>
            </TouchableOpacity>
          ),
        }}
      />

      <MainStack.Screen
        name="PostsScreen"
        component={PostsScreen}
        
      />

      <MainStack.Screen name="ProfileScreen" component={ProfileScreen} />

      <MainStack.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
      />
      <MainStack.Screen name="MapScreen" component={MapScreen} />
      <MainStack.Screen name="CommentsScreen" component={CommentsScreen} />
    </MainStack.Navigator>
  );
};

const styles = StyleSheet.create({
  exitIcon: {
    marginRight: 20,
  },
});
