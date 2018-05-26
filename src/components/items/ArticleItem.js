import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
export default class ArticleItem extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card style={{flex: 1}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: "https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/28660904_2060956130852454_6700909239994382593_n.jpg?_nc_cat=0&oh=5f1e19553a1e4f3ca3713e5adfcf48f9&oe=5BC02B86"}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: "https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/28660904_2060956130852454_6700909239994382593_n.jpg?_nc_cat=0&oh=5f1e19553a1e4f3ca3713e5adfcf48f9&oe=5BC02B86"}} style={{height: 200, width: 200, flex: 1}}/>
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
        </Content>
      </Container>
    );
  }
}