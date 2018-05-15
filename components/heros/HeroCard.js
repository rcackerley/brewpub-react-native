import React from 'react';
import {View, Text} from 'react-native';

let HeroCard = ({card}) =>
  <View style={{
    width: '100%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  }}><Text>{card.title}</Text></View>

export default HeroCard;
