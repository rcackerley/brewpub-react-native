import React from 'react';
import {View, Text, Image} from 'react-native';
import { LinearGradient } from 'expo';
import {APIHost} from '../../environment/config';

let HeroCard = ({item}) =>
  <View>
    <LinearGradient style={{
      width: '100%',
      height: 150,
      flexDirection: 'row',
      marginBottom: 50,
      paddingLeft: 15
    }} colors={['#42593a', '#4b5f3c', '#747b43']}>
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
        }}>by {item.author}</Text>
        <BottleRatings id={book["pairings.id"]} reviews={book.reviews} stars={book.stars}
          white={'white'} token={token} />
      </View>
    </LinearGradient>
  </View>

export default HeroCard;
