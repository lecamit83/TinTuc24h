import { Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";
import { colors } from "../config/colors";
import Main from "../screens/Main";
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
const routes = {
  XEM_NHIEU: {
    screen: Main,
    navigationOptions: {
      title: XEM_NHIEU
    }
  },
  BAI_VIET: {
    screen: Main,
    navigationOptions: {
      title: BAI_VIET
    }
  },
  TIN_TUC: {
    screen: Main,
    navigationOptions: {
      title: TIN_TUC
    }
  },
  THE_THAO: {
    screen: Main,
    navigationOptions: {
      title: THE_THAO
    }
  },
  GIAI_TRI: {
    screen: Main,
    navigationOptions: {
      title: GIAI_TRI
    }
  },
  STAR: {
    screen: Main,
    navigationOptions: {
      title: STAR
    }
  },
  GIOI_TRE: {
    screen: Main,
    navigationOptions: {
      title: GIOI_TRE
    }
  },
  SUC_KHOE: {
    screen: Main,
    navigationOptions: {
      title: SUC_KHOE
    }
  },
  TAM_SU: {
    screen: Main,
    navigationOptions: {
      title: TAM_SU
    }
  },
  GIA_DINH: {
    screen: Main,
    navigationOptions: {
      title: GIA_DINH
    }
  },
  DEP_PLUS: {
    screen: Main,
    navigationOptions: {
      title: DEP_PLUS
    }
  },
  KHAM_PHA: {
    screen: Main,
    navigationOptions: {
      title: KHAM_PHA
    }
  },
  DU_LICH: {
    screen: Main,
    navigationOptions: {
      title: DU_LICH
    }
  },
  THE_GIOI: {
    screen: Main,
    navigationOptions: {
      title: THE_GIOI
    }
  },
  PHAP_LUAT: {
    screen: Main,
    navigationOptions: {
      title: PHAP_LUAT
    }
  },
  XA_HOI: {
    screen: Main,
    navigationOptions: {
      title: XA_HOI
    }
  },
  GIAO_DUC: {
    screen: Main,
    navigationOptions: {
      title: GIAO_DUC
    }
  },
  GAME: {
    screen: Main,
    navigationOptions: {
      title: GAME
    }
  },
  XE: {
    screen: Main,
    navigationOptions: {
      title: XE
    }
  },
  THOI_SU: {
    screen: Main,
    navigationOptions: {
      title: THOI_SU
    }
  },
  XEM_NHIEU: {
    screen: Main,
    navigationOptions: {
      title: XEM_NHIEU
    }
  },
  KINH_DOANH: {
    screen: Main,
    navigationOptions: {
      title: KINH_DOANH
    }
  },
  HI_TEK: {
    screen: Main,
    navigationOptions: {
      title: HI_TEK
    }
  },
  DOI_SONG: {
    screen: Main,
    navigationOptions: {
      title: DOI_SONG
    }
  },
  VIDEO: {
    screen: Main,
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
      flexWrap: 'wrap',
    },
    tabStyle: {
      height: 32,
      justifyContent: 'center',
      alignItems: 'center',
    },
    style: {
      backgroundColor: colors.HEADER_COLOR
    },
    pressOpacity: 0.5
  }
};
const TabBar = createMaterialTopTabNavigator(routes, config);

export default TabBar;
