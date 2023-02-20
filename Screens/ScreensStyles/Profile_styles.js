import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      //justifyContent: "center",
      alignItems: "center",
    },
    innerCont: {
      flex: 2,
      position: "absolute",
      minHeight: 100,
      flexDirection: "row",
      padding: 20,
    },
    profileBox: {
      width: 60,
      height: 60,
      backgroundColor: "#F6F6F6",
      borderRadius: 16,
    },
    list:{
      marginTop: 20,
    },
    poster: {
      width: 343,
      height: 240,
      borderRadius: 8,
      marginTop: 16,
    },
    postTitle: {
      marginRight: "auto",
      fontSize: 16,
      weight: "bold",
    },
  
    postDescription: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
    locationContainer: {
      flex: 1,
      flexDirection: "row",
      marginLeft: "auto",
      borderBottom: 1,
  
      justifyContent: "flex-end",
    },
  });
  