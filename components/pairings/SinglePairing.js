import React from 'react';
import {View, Image} from 'react-native';
import {APIHost} from '../../environment/config';

let SinglePairing = ({pairing}) =>
  <View>
      <Image style={{
        width: 6,
        height: 23
        }}
        source={{uri: APIHost + '/' + pairing.icon}} />
  </View>

export default SinglePairing
