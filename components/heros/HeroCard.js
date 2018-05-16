import React from 'react';
import {View, Text, Image} from 'react-native';
import { LinearGradient } from 'expo';
import {APIHost} from '../../environment/config';
import BottleRatings from '../utility/Ratings';
import {Button} from 'native-base';
import {withNavigation} from 'react-navigation';

let colorStyles = {
  wind: ['#42593a', '#4b5f3c', '#747b43'],
  botany: ['#8e3611','#b14b18','#d55f1f'],
  air: ['#454859','#687088','#8997b5']
}
let HeroCard = ({item, navigation}) =>
  <View>
    <LinearGradient style={{
      width: '100%',
      height: 225,
      flexDirection: 'row',
      marginBottom: 0,
      paddingLeft: 15
    }} colors={colorStyles[item.class]}>
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
      <View>
        <Text style={{
          fontFamily: 'quicksand-bold',
          fontSize: 17,
          color: 'white',
          marginBottom: 5,
          marginTop: 20
        }}>{item.title}</Text>
        <Text style={{
          fontFamily: 'quicksand-regular',
          fontSize: 15,
          color: 'white',
          marginBottom: 10
        }}>& {item.name}</Text>
        <BottleRatings id={item["pairings.id"]} reviews={item.reviews} stars={item.stars}
          white={'white'}/>
          <Text style={{
            fontFamily: 'quicksand-regular',
            fontSize: 12,
            color: 'white',
            marginBottom: 10,
            width: 220
          }}>{item.description}</Text>
        <Button
          onPress={event => navigation.navigate('Pairing', item)}
          small style={{
            width: 120,
            marginTop: 5,
            backgroundColor: "white",
            marginRight: 10,
            justifyContent: 'center'
          }}
        >
          <Text style={{
            fontSize: 15,
            color: '#362c1e',
          }}>View Pairing</Text>
        </Button>
      </View>
    </LinearGradient>
  </View>

export default withNavigation(HeroCard);
