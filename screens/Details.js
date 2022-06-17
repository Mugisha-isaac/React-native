import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
} from "react-native-web";
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../constants";
import {
  FocusedStatusBar,
  CircleButton,
  RectButton,
  SubInfo,
  DetailsDesc,
  DetailsBid,
} from "../components";
const Details = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        transLucent={true}
      />
      <View>
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
    </SafeAreaView>
  );
};

export default Details;
