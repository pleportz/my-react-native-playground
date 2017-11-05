import React, { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Page } from 'HowMany/src/components';
import appStyle from 'HowMany/src/appStyle';

class Home extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello, Navigation!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
