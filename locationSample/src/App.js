import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import getUserLocationInfo from './services/get-user-location-info/getUserLocationInfo';

export default class App extends Component {
  state = {
    locationInfo: {}
  };

  async componentDidMount() {
    const locationInfo = await getUserLocationInfo();

    this.setState({
      locationInfo,
    });
  }

  render() {
    const { locationInfo } = this.state;
    
    if (!Object.keys(locationInfo).length) {
      return (
        <View style={styles.mainContainer}>
          <Text>Loading user location info...</Text>
        </View>
      );
    }

    return (
      <View style={styles.mainContainer}>
        <View>
          <Text>City: {locationInfo.city}</Text>
          <Text>State: {locationInfo.state}</Text>
          <Text>Country: {locationInfo.country}</Text>
          <Text>Continent: {locationInfo.continent}</Text>
          <Text>Latitude: {locationInfo.latitude}</Text>
          <Text>Longitude: {locationInfo.longitude}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#e6e7e7",
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
});
