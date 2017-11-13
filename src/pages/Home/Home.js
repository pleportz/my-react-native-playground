// @flow
import React, { PureComponent } from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import { Button, Text, TextInput } from '../../components/common';
import { PlusButton } from '../../components/PlusButton';

class Home extends PureComponent<void, State> {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible: boolean) {
    this.setState({ modalVisible: visible });
  }

  openModal = () => this.setModalVisible(true);
  confirmModal = () => this.setModalVisible(false);

  render() {
    return (
      <View style={styles.container}>
        <Modal animationType="fade" transparent={false} visible={this.state.modalVisible}>
          <View style={styles.modalContent}>
            <Text>What are we counting?</Text>
            <TextInput placeholder="Lost pens, Hiccups..." autofocus />
            <Button text="Confirm" onPress={this.confirmModal} />
          </View>
        </Modal>
        <View>
          <Text style={[styles.text, styles.subtitle]}>Start counting!</Text>
        </View>
        <PlusButton fontSize={180} size={220} onPress={this.openModal} />
        <View style={styles.footerContainer}>
          <Text style={styles.text}>Wanna keep track of something?</Text>
          <Text style={styles.text}> Count it with How Many</Text>
        </View>
      </View>
    );
  }
}

type State = {
  modalVisible: boolean,
};

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
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
