//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Button, Icon } from "native-base";
import Item from "../components/items/ArticleItem";

// create a component
class Main extends Component {
  constructor(props) {
    super(props);
    this.state={
      products : ["A"],
    }
  }
  render() {
    const {products} = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
          ]}
          renderItem={({item}) =>(
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("DetailNav")}}>
              <Item />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={1}
        />
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
