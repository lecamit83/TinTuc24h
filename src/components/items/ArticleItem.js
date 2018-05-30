import React, { Component } from "react";
import { Image, Dimensions, StyleSheet, View } from "react-native";
import {
  Card,
  ListItem,
  Thumbnail,
  Body,
  Text,
  Content,
  CardItem,
  Left
} from "native-base";
export default class ArticleItem extends Component {
  render() {
    return (
      <View style={{ flexDirection: "column", paddingLeft: 16}}>
        <View style={{ flexDirection: "row", paddingTop: 8, paddingBottom : 8 }}>
          <Thumbnail
            style={{ marginRight: 8 }}
            square
            size={80}
            source={{
              uri:
                "https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/28660904_2060956130852454_6700909239994382593_n.jpg?_nc_cat=0&oh=5f1e19553a1e4f3ca3713e5adfcf48f9&oe=5BC02B86"
            }}
          />
          <Left>
            <Text>Sankhadeep</Text>
            <Text note>Time</Text>
            <Text note>Its time to build a difference . .</Text>
          </Left>
        </View>
        <View style={{backgroundColor: "#1E1E1E", height: 1, opacity: 0.5,}}/>

      </View>
    );
  }
}
const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  image: {
    height: height - 20,
    width: width - 20
  }
});
