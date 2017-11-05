// @flow
import React from 'react';
import { View, StyleSheet } from 'react-native';
import appStyle from 'HowMany/src/appStyle';

const Page = props => (
  <View
    style={[
      styles.page,
      {
        paddingTop: props.noNavBar ? 0 : appStyle.grid.x2,
        paddingHorizontal: props.noMargin ? 0 : appStyle.grid.x3,
        backgroundColor: props.backgroundColor,
      },
    ]}
  >
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});

export default Page;
