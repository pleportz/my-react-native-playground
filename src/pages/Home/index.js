import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '../../components/common';

import { Page } from 'HowMany/src/components';
import appStyle from 'HowMany/src/appStyle';

class Home extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Start counting!</Text>
        </View>
        <View>
          <Text style={styles.centeredText}>Wanna keep track of something? Count it with </Text>
          <Text style={styles.centeredText}>How Many</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  centeredText: {
    textAlign: 'center',
  },
});

export default Home;
