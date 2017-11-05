import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '../../components/common';
import { PlusButton } from '../../components/PlusButton';

class Home extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={[styles.text, styles.subtitle]}>Start counting!</Text>
        </View>
        <PlusButton fontSize={100} size={220} onPress={() => {}} />
        <View style={styles.footerContainer}>
          <Text style={styles.text}>Wanna keep track of something?</Text>
          <Text style={styles.text}> Count it with How Many</Text>
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
  text: {
    textAlign: 'center',
    fontSize: 18,
  },
  subtitle: {
    fontSize: 32,
  },
  footerContainer: {
    marginBottom: 40,
  },
});

export default Home;
