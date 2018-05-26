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
  Content,
  Thumbnail
} from "native-base";
import {colors} from "../config/colors";

// create a component
class SideMenu extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: colors.HEADER_COLOR }} >
        <View style={{ flex: 1, justifyContent: "center", paddingLeft: 16 }}>
          <Thumbnail source={{ uri: "https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/28660904_2060956130852454_6700909239994382593_n.jpg?_nc_cat=0&oh=5f1e19553a1e4f3ca3713e5adfcf48f9&oe=5BC02B86" }} />
          <Text style={{ fontSize: 20, color: "#FFF" }} >Tin Tức 24h</Text>
        </View>
        <Container style={{ flex: 3, backgroundColor: "#FFF" }}>
          <List>
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
          </List>
        </Container>
      </View>
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
