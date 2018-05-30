//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
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
import { SafeAreaView } from "react-navigation";
import { colors } from "../config/colors";
import { XEM_NHIEU, BAI_VIET } from "../route/config";

// create a component
class SideMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.HEADER_COLOR }}>
        <View style={{ flex: 1, justifyContent: "center", paddingLeft: 16 }}>
          <Thumbnail
            source={{
              uri:
                "https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/28660904_2060956130852454_6700909239994382593_n.jpg?_nc_cat=0&oh=5f1e19553a1e4f3ca3713e5adfcf48f9&oe=5BC02B86"
            }}
          />
          <Text style={{ fontSize: 20, color: "#FFF" }}>Tin Tức 24h</Text>
        </View>
        <View style={{ flex: 3, backgroundColor: "#FFF" }}>
          <List>
            <ListItem icon>
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                onPress={() => {
                  navigation.navigate("TabDra");
                }}
              >
                <Left>
                  <Icon name="medical" />
                </Left>
                <Body>
                  <Text>{XEM_NHIEU}</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </TouchableOpacity>
            </ListItem>
            <ListItem icon>
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                onPress={() => {
                  navigation.navigate("TabDra");
                }}
              >
                <Left>
                  <Icon name="medkit" />
                </Left>
                <Body>
                  <Text>{BAI_VIET}</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </TouchableOpacity>
            </ListItem>
            <ListItem icon>
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                onPress={() => {
                  navigation.navigate("DetailDra");
                }}
              >
                <Left>
                  <Icon name="cog" />
                </Left>
                <Body>
                  <Text>Vật Tư & Thiết Bị Y Tế</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </TouchableOpacity>
            </ListItem>
            <ListItem icon>
              <TouchableOpacity style={{ flexDirection: "row" }}>
                <Left>
                  <Icon name="color-filter" />
                </Left>
                <Body>
                  <Text>Mỹ Phẩm</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </TouchableOpacity>
            </ListItem>
            <ListItem icon>
              <TouchableOpacity style={{ flexDirection: "row" }}>
                <Left>
                  <Icon name="medical" />
                </Left>
                <Body>
                  <Text>Thuốc</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </TouchableOpacity>
            </ListItem>
            <ListItem icon>
              <TouchableOpacity style={{ flexDirection: "row" }}>
                <Left>
                  <Icon name="medical" />
                </Left>
                <Body>
                  <Text>Thuốc</Text>
                </Body>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </TouchableOpacity>
            </ListItem>
          </List>
        </View>
      </SafeAreaView>
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
