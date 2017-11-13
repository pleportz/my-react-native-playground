// @flow
import React, { PureComponent } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Text } from '../common';

import appStyle from 'HowMany/src/appStyle';

class Button extends PureComponent<Props, void> {
  render() {
    const props = this.props;
    const sizeStyle = {
      width: props.size,
      height: props.size,
      borderRadius: props.size / 2,
    };
    return (
      <TouchableOpacity onPress={props.onPress} style={styles.container} activeOpacity={0.6}>
        <View style={[styles.plusButton, sizeStyle]}>
          <Text style={[styles.text, { fontSize: props.fontSize }]}>+</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

type Props = {
  fontSize?: number,
  size: number,
  onPress: Function,
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: appStyle.dimensions.touchableHeight,
    marginVertical: appStyle.grid.x1,
  },
  plusButton: {
    justifyContent: 'center',
    backgroundColor: '#ffffff80',
    borderWidth: 6,
  },
  text: {
    textAlign: 'center',
  },
});

export default Button;
