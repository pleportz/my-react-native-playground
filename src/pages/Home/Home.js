// @flow
import React, { PureComponent } from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import { Button, Text, TextInput } from '../../components/common';
import { PlusButton } from '../../components/PlusButton';

class Home extends PureComponent<Props, State> {
  state = {
    modalVisible: false,
    countTitle: undefined,
  };

  setModalVisible(visible: boolean) {
    this.setState({ modalVisible: visible });
  }
  setCountTitle = (countTitle: string) => {
    this.setState({ countTitle });
  };

  openModal = () => this.setModalVisible(true);
  confirmModal = () => {
    this.props.addCount(this.state.countTitle);
    this.props.setCurrentCount(this.state.countTitle);
    this.setModalVisible(false);
    this.props.navigation.navigate('counter', { countTitle: this.state.countTitle });
  };

  render() {
    return (
      <View style={styles.container}>
        <Modal animationType="fade" transparent={false} visible={this.state.modalVisible}>
          <View style={styles.modalContent}>
            <Text>What are we counting?</Text>
            <TextInput
              placeholder="Lost pens, Hiccups..."
              autofocus
              value={this.state.countTitle}
              onChangeText={this.setCountTitle}
            />
            <Button text="Confirm" onPress={this.confirmModal} />
          </View>
        </Modal>
        <View>
          <Text style={[styles.text, styles.subtitle, styles.subtitle1]}>START</Text>
          <Text style={[styles.text, styles.subtitle, styles.subtitle2]}>START</Text>
          <Text style={[styles.text, styles.subtitle, styles.subtitle3]}>START</Text>
          <Text style={[styles.text, styles.subtitle, styles.subtitle4]}>START</Text>
        </View>
        <PlusButton fontSize={180} size={220} onPress={this.openModal} />
        <View style={styles.footerContainer}>
          <Text style={styles.text}>Wanna keep track of something?</Text>
        </View>
      </View>
    );
  }
}

type Props = {
  navigation: any,
};

type State = {
  modalVisible: boolean,
  countTitle?: ?string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
  },
  subtitle: {
    position: 'absolute',
    top: 0,
    left: -70,
    fontSize: 50,
    color: '#FF69B4',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowRadius: 1,
    fontWeight: 'bold',
  },
  subtitle1: {
    textShadowOffset: { width: -1, height: 0 },
  },
  subtitle2: {
    textShadowOffset: { width: 1, height: 0 },
  },
  subtitle3: {
    textShadowOffset: { width: 0, height: 1 },
  },
  subtitle4: {
    textShadowOffset: { width: 0, height: -1 },
  },
  footerContainer: {
    marginBottom: 40,
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
