import { StackNavigator } from 'react-navigation';

import * as Pages from 'HowMany/src/pages';

export default StackNavigator({
  home: {
    screen: Pages.Home,
  },
  infos: {
    screen: Pages.Infos,
  },
}, {
  initialRouteName: 'home',
});
