import { StackNavigator } from 'react-navigation';
import * as Pages from './pages';

export default StackNavigator(
  {
    home: {
      screen: Pages.Home,
      navigationOptions: {
        title: 'HOW MANY',
        headerTitleStyle: {
          fontFamily: 'OpenSans-Regular',
        },
      },
    },
  },
  {
    initialRouteName: 'home',
  }
);
