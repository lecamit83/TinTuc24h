//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Icon
} from "native-base";

import Icons from "react-native-vector-icons/Ionicons";
import { colors } from "../../config/colors";
// create a component
class StackHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { container } = styles;
    const { navigation } = this.props;

    return (
      <Header style={{ backgroundColor: colors.HEADER_COLOR, marginLeft: 0 }}>
        <Left>
          <Button transparent onPress={() => {navigation.goBack()}}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Tin tức 24h</Title>
        </Body>
        <Right>
        </Right>
      </Header>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: "green",
    justifyContent: "center"
  }
});

export default StackHeader;
