import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFFFFF",
      padding: 16,
    },
    poster: {
      width: 343,
      height: 240,
      backgroundColor: "#E8E8E8",
      borderColor: "#E8E8E8",
      borderRadius: 8,
      marginTop: 32,
    },
    label: {
      marginRight: "auto",
      fontSize: 16,
      color: "#BDBDBD",
  
      marginBottom: 18,
    },
    input: {
      width: 343,
      borderBottomWidth: 1,
      borderColor: "#E8E8E8",
      fontSize: 16,
      marginBottom: 22,
    },
    button: {
      paddingTop: 16,
      paddingBottom: 16,
      paddingLeft: 32,
      paddingRight: 32,
      width: 343,
      backgroundColor: "#F6F6F6",
      borderRadius: 100,
      alignItems: "center",
    },
    activeButton: {
      paddingTop: 16,
      paddingBottom: 16,
      paddingLeft: 32,
      paddingRight: 32,
      width: 343,
      backgroundColor: "#FF6C00",
      borderRadius: 100,
      alignItems: "center",
    },
  
    buttonText: {
      fontSize: 16,
      color: "#BDBDBD",
    },
  
    buttonActiveText: {
      fontSize: 16,
      color: "white",
    },
  
    inputContainer: {
      justifyContent: "center",
    },
    icon: {
      position: "absolute",
      right: 0,
      top: 0,
    },
    cameraIcon: {
      width: 60,
  
      position: "absolute",
      right: 150,
      top: 80,
    },
    iconContainer: {
      position: "relative",
      width: 343,
      height: 240,
    },
  
    camera: {
      width: 343,
      height: 240,
      position: "relative",
  
      backgroundColor: "#E8E8E8",
      borderColor: "#E8E8E8",
      borderRadius: 20,
    },
    trash: {
      width: 24,
      marginTop: "auto",
    },
  
    innerContainer: {
      flex: 1,
      alignItems: "center",
      //justifyContent: "flex-end",
    },
    takePhotoContainer: {
      position: "relative",
      borderColor: "red",
      width: 343,
      height: 240,
      borderRadius: 20,
      
    },
    postPhoto: {
      position: "absolute",
      top: 0,
      left: 0,
      borderRadius: 20,
    },
  });
  