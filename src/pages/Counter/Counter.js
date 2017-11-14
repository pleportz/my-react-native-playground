// @flow
import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '../../components/common';

class Counter extends PureComponent<void, void> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>WIP</Text>
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
  text: {
    textAlign: 'center',
    fontSize: 18,
  },
});

export default Counter;
