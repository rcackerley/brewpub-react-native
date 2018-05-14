import React from 'react';
import SinglePairing from './SinglePairing';
import {View, Text} from 'react-native';

let BookPairings = ({pairings}) =>
  <View className="book-pairings">
    <Text>Similar Pairings:</Text>
    {pairings.map((pairing, i) =>
      <SinglePairing pairing={pairing} key={`pair-${pairing.id}`} />
    )}
  </View>

export default BookPairings;
