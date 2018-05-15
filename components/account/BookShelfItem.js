import React from 'react';
import {View, Image} from 'react-native';
import {APIHost} from '../../environment/config';

let BookShelfItem = ({item}) =>
  <View style={{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 10,
    alignItems: 'flex-end'
  }}>
    <Image style={{
      width: 100,
      height: 157
    }}source={{uri: APIHost + '/' + item.image}} />
    <Image style={{
      width: 25,
      height: 100,
      left: -15
    }} source={{uri: APIHost + '/' + item.icon}} />
  </View>

export default BookShelfItem;
