import React from 'react';
import StarRating from 'react-native-star-rating';
import {APIHost} from '../../environment/config';
import {ratePairing} from '../../ajax/ajax';
import {connect} from 'react-redux';
import {withNavigation} from 'react-navigation';
import {Text, View} from 'react-native';

let BottleRatings = ({reviews, stars, white, orange, id, token, navigation}) => {
  let filledStars = Math.round(stars / reviews);
  return (
      <View>
      { orange ?
        <View style={{
          flexDirection: 'row'
        }}>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={filledStars}
          emptyStar={{uri: APIHost + '/' + '/images/empty-bottle-' + orange + '.png'}}
          fullStar={{uri: APIHost + '/' + '/images/filled-bottle-' + orange + '.png'}}
          starSize={20}
          buttonStyle={{
            marginBottom: 10,
          }}
          starStyle={{
            marginRight: -5
          }}
          selectedStar={value =>
            token ? ratePairing({id: id, stars: value}, token) : navigation.navigate('Account') }
        />
        <Text style={{
          marginLeft: 10,
          fontFamily: 'quicksand-light',
          marginTop: 3,
          fontSize: 12,
          color: '#362c1e',
        }}>{reviews} ratings</Text>
        </View>
        :
        <View style={{
          flexDirection: 'row'
        }}>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={filledStars}
          emptyStar={{uri: APIHost + '/' + '/images/empty-bottle-' + white + '.png'}}
          fullStar={{uri: APIHost + '/' + '/images/filled-bottle-' + white + '.png'}}
          starSize={20}
          buttonStyle={{
            marginBottom: 10,
          }}
          starStyle={{
            marginRight: -5
          }}
          selectedStar={value =>
            token ? ratePairing({id: id, stars: value}, token) : navigation.navigate('Account') }
        />
        <Text style={{
          marginLeft: 10,
          fontFamily: 'quicksand-light',
          marginTop: 3,
          fontSize: 12,
          color: white,
        }}>{reviews} ratings</Text>
        </View>
      }
      </View>
  )
}

let mapStateToProps = state => ({token: state.token})
let BottleRatingsContainer = withNavigation(connect(mapStateToProps)(BottleRatings))
export default BottleRatingsContainer
