import { StackNavigator } from 'react-navigation';
import * as Pages from './pages';

export default StackNavigator(
  {
    home: {
      screen: Pages.Home,
      navigationOptions: {
        title: 'HOW MANY',
      },
    },
    counter: {
      screen: Pages.Counter,
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.countTitle,
      }),
    },
  },
  {
    initialRouteName: 'home',
    navigationOptions: {
      headerTitleStyle: {
        fontFamily: 'OpenSans-Regular',
      },
      headerTitleAllowFontScaling: false,
      headerBackTitle: null,
    },
  }
);
