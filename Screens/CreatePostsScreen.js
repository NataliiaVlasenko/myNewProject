import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CreatePostScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CreateScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CreatePostScreen;