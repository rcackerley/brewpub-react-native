import React from 'react';
import {View, Image} from 'react-native';

let Logo = () =>
  <View>
    <Image source={require('../../images/brewpub-logo.png')}
    style={{
      width: 99,
      height: 30,
      }}/>
  </View>


export default Logo;
