import React from "react";
import { View, Text, StyleSheet, Image, Alert, tabBarIcon } from "react-native";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

const Home = ({ navigation, route }) => {
 
  // Alert.alert("Ваші данні", `${email} + ${password}`);
  //console.log(route.params);

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "PostsScreen") {
            iconName = focused ? "grid" : "grid";
          } else if (route.name === "ProfileScreen") {
            iconName = focused ? "user" : "user";
          } else if (route.name === "CreatePostsScreen") {
            iconName = focused ? "plus-circle" : "plus-circle";
          }
          return <Feather name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#FF6C00",
        inactiveTintColor: "gray",
        showLabel: false,
      }}
    >
      <Tabs.Screen name="PostsScreen" component={PostsScreen} />
      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
        }}
      />
      <Tabs.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
   headerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    border: 2,
  },
});

export default Home;
