//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {Button, Icon} from "native-base";
import Item from "../components/items/ArticleItem";

// create a component
class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <Item />
        <Item />
        </ScrollView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});

//make this component available to the app
export default Main;
