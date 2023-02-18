import React from "react";


import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
    StyleSheet,
    View,
    Image,
    Button,
    Alert,
    TouchableOpacity,
  } from "react-native";

export const useRoute = () =>{
    
    if (!isAuth) {
        return (
          <AuthStack.Navigator>
            <AuthStack.Screen
              options={{
                headerShown: false,
              }}
              name="Login"
              component={LoginScreen}
            />
            <AuthStack.Screen
              options={{
                headerShown: false,
              }}
              name="Register"
              component={RegisterScreen}
            />
          </AuthStack.Navigator>
        );
      }
      return (
        <MainStack.Navigator initialRouteName="Registration">
 

           <MainStack.Screen name="Registration" component={RegistrationScreen} />
  
           <MainStack.Screen name="Login" component={LoginScreen} />
           <MainStack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Публікації",
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Registration")}
                >
                  <View>
                    <Image
                      source={require("./img/log-out.png")}
                      style={styles.exitIcon}
                    />
                  </View>
                </TouchableOpacity>
              ),
            }}
          />
  <MainStack.Screen name="MapScreen" component={MapScreen} />
  <MainStack.Screen name="CommentsScreen" component={CommentsScreen} />
          <MainStack.Screen name="PostsScreen" component={PostsScreen} />
          <MainStack.Screen name="ProfileScreen" component={ProfileScreen} />
          <MainStack.Screen
            name="CreatePostsScreen"
            component={CreatePostsScreen}
          />
        </MainStack.Navigator>
      );
    };
