// @flow
import React, { PureComponent } from 'react';
import { StyleSheet, Text } from 'react-native';

class CustomText extends PureComponent<Props, void> {
  render() {
    const { style, children, ...otherProps } = this.props;
    return (
      <Text style={[styles.text, style]} {...otherProps}>
        {children}
      </Text>
    );
  }
}

type Props = {
  children: string,
  style?: any,
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans-Regular',
  },
});

export default CustomText;
