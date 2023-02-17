import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Alert, tabBarIcon } from "react-native";

const CommentsScreen = ({ navigation, route }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (route.params) {
      setComments((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  //console.log(route.params.item);

  return (
    <View>
      <Image source={{ uri: route.params.item.photo }} style={styles.poster} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //alignItems: "center",
    //justifyContent: "center",
  },
  exitIcon: {},

  headerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    border: 2,
  },
  poster: {
    width: 343,
    height: 240,
    backgroundColor: "red",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    margin: 32,
  },
});

export default CommentsScreen;
