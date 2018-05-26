//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {Button, Icon} from "native-base";

// create a component
class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Main</Text>
        <Button>
          <Icon name="ios-radio-outline" />
        </Button>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c3e50"
  }
});

//make this component available to the app
export default Main;
