import { Dimensions } from "react-native";
import {
  createMaterialTopTabNavigator,
  createStackNavigator
} from "react-navigation";
import { colors } from "../config/colors";
import Main from "../screens/Main";
import Detail from "../screens/Detail";
import {
  XEM_NHIEU,
  BAI_VIET,
  TIN_TUC,
  THE_GIOI,
  THE_THAO,
  TAM_SU,
  THOI_SU,
  STAR,
  SUC_KHOE,
  GAME,
  GIA_DINH,
  GIAI_TRI,
  GIAO_DUC,
  GIOI_TRE,
  DEP_PLUS,
  DOI_SONG,
  DU_LICH,
  KHAM_PHA,
  KINH_DOANH,
  HI_TEK,
  VIDEO,
  XA_HOI,
  XE,
  PHAP_LUAT
} from "./config";
const { height, width } = Dimensions.get("window");
const StackNav = createStackNavigator(
  {
    Main: {
      screen: Main
    }
  },
  {
    navigationOptions: {
      header: null
    }
  }
);
const routes = {
  XEM_NHIEU: {
    screen: StackNav,
    navigationOptions: {
      title: XEM_NHIEU
    }
  },
  BAI_VIET: {
    screen: StackNav,
    navigationOptions: {
      title: BAI_VIET
    }
  },
  TIN_TUC: {
    screen: StackNav,
    navigationOptions: {
      title: TIN_TUC
    }
  },
  THE_THAO: {
    screen: StackNav,
    navigationOptions: {
      title: THE_THAO
    }
  },
  GIAI_TRI: {
    screen: StackNav,
    navigationOptions: {
      title: GIAI_TRI
    }
  },
  STAR: {
    screen: StackNav,
    navigationOptions: {
      title: STAR
    }
  },
  GIOI_TRE: {
    screen: StackNav,
    navigationOptions: {
      title: GIOI_TRE
    }
  },
  SUC_KHOE: {
    screen: StackNav,
    navigationOptions: {
      title: SUC_KHOE
    }
  },
  TAM_SU: {
    screen: StackNav,
    navigationOptions: {
      title: TAM_SU
    }
  },
  GIA_DINH: {
    screen: StackNav,
    navigationOptions: {
      title: GIA_DINH
    }
  },
  DEP_PLUS: {
    screen: StackNav,
    navigationOptions: {
      title: DEP_PLUS
    }
  },
  KHAM_PHA: {
    screen: StackNav,
    navigationOptions: {
      title: KHAM_PHA
    }
  },
  DU_LICH: {
    screen: StackNav,
    navigationOptions: {
      title: DU_LICH
    }
  },
  THE_GIOI: {
    screen: StackNav,
    navigationOptions: {
      title: THE_GIOI
    }
  },
  PHAP_LUAT: {
    screen: StackNav,
    navigationOptions: {
      title: PHAP_LUAT
    }
  },
  XA_HOI: {
    screen: StackNav,
    navigationOptions: {
      title: XA_HOI
    }
  },
  GIAO_DUC: {
    screen: StackNav,
    navigationOptions: {
      title: GIAO_DUC
    }
  },
  GAME: {
    screen: StackNav,
    navigationOptions: {
      title: GAME
    }
  },
  XE: {
    screen: StackNav,
    navigationOptions: {
      title: XE
    }
  },
  THOI_SU: {
    screen: StackNav,
    navigationOptions: {
      title: THOI_SU
    }
  },
  XEM_NHIEU: {
    screen: StackNav,
    navigationOptions: {
      title: XEM_NHIEU
    }
  },
  KINH_DOANH: {
    screen: StackNav,
    navigationOptions: {
      title: KINH_DOANH
    }
  },
  HI_TEK: {
    screen: StackNav,
    navigationOptions: {
      title: HI_TEK
    }
  },
  DOI_SONG: {
    screen: StackNav,
    navigationOptions: {
      title: DOI_SONG
    }
  },
  VIDEO: {
    screen: StackNav,
    navigationOptions: {
      title: VIDEO
    }
  }
};

const config = {
  initialRouteName: "XEM_NHIEU",
  swipeEnabled: false,
  lazy: true,
  animationEnabled: false,
  tabBarOptions: {
    upperCaseLabel: false,
    activeTintColor: "yellow",
    inactiveTintColor: "#FFF",
    scrollEnabled: true,
    labelStyle: {
      fontSize: 12,
      fontWeight: "bold",
      flexWrap: "wrap"
    },
    tabStyle: {
      height: 32,
      justifyContent: "center",
      alignItems: "center"
    },
    style: {
      backgroundColor: colors.HEADER_COLOR
    },
    pressOpacity: 0.5
  }
};
const TabBar = createMaterialTopTabNavigator(routes, config);

export default TabBar;
