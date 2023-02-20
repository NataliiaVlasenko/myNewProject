import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: "center",
  },

  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",

    backgroundColor: "#FFFFFF",
    maxHeight: 549,
    marginTop: "auto",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: "100%",
  },
  title: {
    fontSize: 30,
    marginBottom: 33,
    marginTop: 92,
    textAlign: "center",
  },
  input: {
    width: 343,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    marginBottom: 10,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    position: "relative",
  },

  button: {
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    marginTop: 43,
  },
  backImg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  link: {
    fontSize: 16,
    weight: 400,
    marginBottom: 42,
    marginTop: 16,
    textAlign: "center",
    color: " #1B4371",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
    padding: 16,
  },
  addIcon: {
    position: "absolute",
    top: 81,
    left: 107,
  },

  profileBox: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    position: "absolute",
    top: -50,
  },
  showPassw: {
    position: "absolute",
    left: 263,
    top: 298,
  },
});