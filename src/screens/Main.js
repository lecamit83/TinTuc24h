//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import {Button, Icon} from "native-base";
import Item from "../components/items/ArticleItem";

// create a component
class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate("DetailNav")} >
        <Item />
        </TouchableOpacity>
        <Item />
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
