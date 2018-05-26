//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Container,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Icon,
  Content
} from "native-base";

// create a component
class SideMenu extends Component {
  render() {
    return (
      <Container style={{flex: 1}}>
        <Content style={{ flex: 1, backgroundColor: "red" }}>
          <Text>AAA</Text>
        </Content>
        <Content style={{ flex: 3, backgroundColor: "#FFF" }}>
          <List>
            <ListItem icon>
              <Left>
                <Icon name="medical" />
              </Left>
              <Body>
                <Text>Thuốc</Text>
              </Body>
            </ListItem>
          </List>
          <ListItem icon>
            <Left>
              <Icon name="medical" />
            </Left>
            <Body>
              <Text>Thuốc</Text>
            </Body>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon name="medkit" />
            </Left>
            <Body>
              <Text>Thực Phẩm Chức Năng</Text>
            </Body>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon name="cog" />
            </Left>
            <Body>
              <Text>Vật Tư & Thiết Bị Y Tế</Text>
            </Body>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon name="color-filter" />
            </Left>
            <Body>
              <Text>Mỹ Phẩm</Text>
            </Body>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon name="medical" />
            </Left>
            <Body>
              <Text>Thuốc</Text>
            </Body>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon name="medical" />
            </Left>
            <Body>
              <Text>Thuốc</Text>
            </Body>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  }
});

//make this component available to the app
export default SideMenu;
