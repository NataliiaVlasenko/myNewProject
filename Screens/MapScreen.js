import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = ({ route }) => {
  console.log("route.params.location", route.params.location);
  const { longitude, latitude } = route.params.location;
  
  if(!route.params.location) {
    Alert.alert("There`s no location point here! Try another post!");
    return;
  
  }

  return (

        <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
      >
        <Marker coordinate={{ latitude, longitude }} title="travel photo" />
      </MapView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapScreen;
