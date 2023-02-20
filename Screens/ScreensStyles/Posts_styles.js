import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      //justifyContent: "center",
      alignItems: "center",
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
  
    commentIcon: {
      marginRight: "auto",
      marginVertical: 12,
    },
  
    locationContainer: {
      flex: 1,
      flexDirection: "row",
      marginLeft: "auto",
      borderBottom: 1,
  
      justifyContent: "flex-end",
    },
  
    profileBox: {
  
      width: 60,
      height: 60,
      backgroundColor: "#F6F6F6",
      borderRadius: 16,
      
   
    },
    profileDescrBox:{
      flex: 1,
      
  
    },
    profileDescr: {
      fontSize: 16,
      weight: "bold",
    },
    innerCont:{
      flex: 2,
      position: "absolute",
      minHeight: 100,
      flexDirection: "row",
      padding: 20,
    
    },
    list:{
      marginTop: 60,
    },
  
  });
  