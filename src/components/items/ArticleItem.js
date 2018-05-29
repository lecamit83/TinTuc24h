import React, { Component } from 'react';
import { Image, Dimensions, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, View } from 'native-base';
export default class ArticleItem extends Component {
  render() {
    return (
        <View>
          <Card style={{borderWidth : 1, padding: 4}} >
            <CardItem header >
              <Left>
                <Body>
                  <Text>Title Article</Text>
                  <Text note >April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: "https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/28660904_2060956130852454_6700909239994382593_n.jpg?_nc_cat=0&oh=5f1e19553a1e4f3ca3713e5adfcf48f9&oe=5BC02B86"}} style={{height: height / 3, width: width - 40, flex: 1}}/>
                <Text>
                  Description
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </View>
    );
  }
}
const {height, width} = Dimensions.get("window");
const styles = StyleSheet.create({
  image: {
    height : height - 20,
    width : width - 20,
  }
})