import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {APIHost} from '../../environment/config';
import Modal from "react-native-modal";
import {Button} from 'native-base';

class SinglePairing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    }
  }

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {
    let {pairing} = this.props;
    return (
      <View style={{
        marginLeft: 10
      }}>
        <TouchableOpacity onPress={this._toggleModal}>
          <Image style={{
            width: 6,
            height: 23
            }}
            source={{uri: APIHost + '/' + pairing.icon}}
          />
        </TouchableOpacity>
        <Modal onSwipe={() => this.setState({ isVisible: false })}
              swipeThreshold={75}
              swipeDirection="up" isVisible={this.state.isModalVisible}>
          <View style={{
            backgroundColor: '#e28830',
            flexDirection: 'row',
            paddingLeft: 30,
            paddingRight: 30,
            paddingTop: 30,
            paddingBottom: 30,
            justifyContent: 'center',
            borderRadius: 3
           }}>
           <Image style={{
             width: 25,
             height: 100
             }}
             source={{uri: APIHost + '/' + pairing.icon}}
           />
            <View style={{
              marginLeft: 40,
            }}>
              <Text style={{
                color: 'white',
                fontFamily: 'quicksand-bold',
                fontSize: 25
              }}>{pairing.name}</Text>
              <Text style={{
                color: 'white',
                fontFamily: 'quicksand-light',
                fontSize: 17
              }}>from {pairing.brewery}</Text>
              <Button small style={{
                width: 100,
                marginTop: 25,
                backgroundColor: "white",
                marginRight: 10,
                justifyContent: 'center'
              }}bordered light onPress={this._toggleModal}><Text style={{
                fontFamily: 'quicksand-light',
                fontSize: 12,
                color: '#362c1e',
              }}>close</Text></Button>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

export default SinglePairing
