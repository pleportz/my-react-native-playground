// @flow
import React, { PureComponent } from 'react';
import { StyleSheet, TextInput } from 'react-native';

class CustomTextInput extends PureComponent<Props, void> {
  render() {
    const { style, ...rest } = this.props;
    return <TextInput style={[styles.text, style]} {...rest} />;
  }
}

type Props = {
  value?: string,
  style?: any,
  autofocus?: boolean,
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans-Regular',
  },
});

export default CustomTextInput;
