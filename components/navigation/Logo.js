import React from 'react';
import {View, Image} from 'react-native';
import logo from '../../images/brewpub-logo.png'

let Logo = () =>
  <View>
    {<Image source={logo}
    style={{
      width: 99,
      height: 30,
    }}/>}
  </View>


export default Logo;
