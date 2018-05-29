import React from "react";
import { YellowBox, Dimensions } from "react-native";
YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import Header from "../components/headers/DrawerHeader";
import TabBar from "./TabBar";
import SideMenu from "../screens/SideMenu";

const {width, height} = Dimensions.get("window");

const TabNav = createStackNavigator({
  TabBar: {
    screen: TabBar,
    navigationOptions: ({ navigation }) => ({
      header: <Header navigation={navigation} />
    })
  }
});

const Route = createDrawerNavigator(
  {
    TabNav: {
        screen: TabNav,
    },
    DetailNav: {
      screen: DetailNav,
    }
  },
  {
    drawerWidth: width * 0.85,
    initialRouteName: "TabNav",
    contentComponent: props => <SideMenu {...props} />
  }
);

export default Route;
