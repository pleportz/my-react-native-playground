// @flow
import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '../../components/common';

type Props = {
  count: {
    name: string,
    count: number,
  },
};

class Counter extends PureComponent<Props, void> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.count.name}</Text>
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
