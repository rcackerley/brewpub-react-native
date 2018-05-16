import React from 'react';
import {View, Text, Image} from 'react-native';
import Logo from '../navigation/Logo';
import { LinearGradient } from 'expo';
import {APIHost} from '../../environment/config';
import BottleRatings from '../utility/Ratings';

class PairingScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Logo />,
  };
  render() {
    let colorStyles = {
      wind: ['#42593a', '#4b5f3c', '#747b43'],
      botany: ['#8e3611','#b14b18','#d55f1f'],
      air: ['#454859','#687088','#8997b5']
    }
    let item = this.props.navigation.state.params;
    return (
      <View>
        <LinearGradient style={{
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: 0,
          paddingLeft: 15,
        }} colors={colorStyles[item.class]}>
        <View style={{
          flexDirection: 'row'
        }}>
          <Image style={{
            width: 100,
            height: 157,
            top: 20
          }}source={{uri: APIHost + '/' + item.image}} />
          <Image style={{
            width: 25,
            height: 100,
            left: -15,
            top: 80
          }} source={{uri: APIHost + '/' + item.icon}} />
        </View>
        <View style={{
          alignItems:'center'
        }}>
          <Text style={{
            fontFamily: 'quicksand-bold',
            fontSize: 20,
            color: 'white',
            marginBottom: 5,
            marginTop: 40
          }}>{item.title}</Text>
          <Text style={{
            fontFamily: 'quicksand-regular',
            fontSize: 17,
            color: 'white',
            marginBottom: 10
          }}>& {item.name}</Text>
          <BottleRatings id={item["pairings.id"]} reviews={item.reviews} stars={item.stars}
            white={'white'}/>
            <Text style={{
              fontFamily: 'quicksand-regular',
              fontSize: 14,
              color: 'white',
              marginTop: 10,
            }}>written by {item.author}</Text>
            <Text style={{
              fontFamily: 'quicksand-regular',
              fontSize: 14,
              color: 'white',
              marginBottom: 20,
            }}>brewed by {item.brewery}</Text>
            <Text style={{
              fontFamily: 'quicksand-regular',
              fontSize: 12,
              color: 'white',
              marginBottom: 10,
              marginLeft: 10,
              marginRight: 10,
              alignItems: 'center'
            }}>{item.description}</Text>
        </View>
        </LinearGradient>
      </View>
    );
  }
}

export default PairingScreen;
