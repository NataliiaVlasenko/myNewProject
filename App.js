import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";
import Home from "./Screens/Home";
import PostsScreen from "./Screens/PostsScreen";

import CreatePostsScreen from "./Screens/CreatePostsScreen";

import ProfileScreen from "./Screens/ProfileScreen";
import MapScreen from './Screens/MapScreen';
import CommentsScreen from './Screens/CommentsScreen';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const MainStack = createStackNavigator();

const App = () => {
  const exit = () => {};

  return (
    <Provider store={store}>
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Registration">
        {/* Заміна Switch */}

        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        {/* Заміна Route */}
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
    </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  exitIcon: {
    marginRight: 20,
  },
});

export default App;
