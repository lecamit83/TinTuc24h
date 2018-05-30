import React from "react";
import { YellowBox, Dimensions } from "react-native";
YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import Header from "../components/headers/DrawerHeader";
import SHeader from "../components/headers/StackHeader";
import TabBar from "./TabBar";
import SideMenu from "../screens/SideMenu";
import Detail from "../screens/Detail";

const {width, height} = Dimensions.get("window");

const TabNav = createStackNavigator({
  TabBar: {
    screen: TabBar,
    navigationOptions: ({ navigation }) => ({
      header: <Header navigation={navigation} />
    })
  },
  DetailNav: {
    screen: Detail,
    navigationOptions: ({ navigation }) => ({
      header: <SHeader navigation={navigation} />
    })
  }
});

const DetailDra = createStackNavigator({
  DetailNav:{
    screen: Detail,
    navigationOptions: ({ navigation }) => ({
      header: <Header navigation={navigation} />
    })
  }
})



const Route = createDrawerNavigator(
  {
    TabDra: {
        screen: TabNav,
    },
    DetailDra: {
      screen: DetailDra,
    }
  },
  {
    
    drawerWidth: width * 0.85,
    initialRouteName: "TabDra",
    contentComponent: props => <SideMenu {...props} />,
  }
);

export default Route;
