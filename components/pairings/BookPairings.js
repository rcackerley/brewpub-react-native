import React from 'react';
import SinglePairing from './SinglePairing';
import {View, Text} from 'react-native';

let BookPairings = ({pairings}) =>
  <View style={{
    flexDirection: 'row',
    marginTop: 5
  }}>
    <Text style={{fontFamily: 'quicksand-regular'}}>Similar Pairings:</Text>
    {pairings.map((pairing) =>
      <SinglePairing pairing={pairing} key={`pair-${pairing.id}`} />
    )}
  </View>

export default BookPairings;
