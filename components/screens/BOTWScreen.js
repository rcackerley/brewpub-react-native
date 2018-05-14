import React from 'react';
import {View, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import {getBeersOfTheWeek, getSpiritsOfTheWeek} from '../../ajax/ajax';
import {setBeersOfTheWeek} from '../../actions/actions';
import {List, ListItem, Thumbnail, Body} from 'native-base';
import {APIHost} from '../../environment/config';

class BOTWScreen extends React.Component {
  componentDidMount() {
    let {setBeersOfTheWeek} = this.props
    getBeersOfTheWeek()
    .then(beers => setBeersOfTheWeek(beers))
  }

  static navigationOptions = {
    title: 'Brews of the Week',
  };

  render() {
    let {featuredBeers} = this.props;
    return (
      <View>
        <List>
          {featuredBeers.map((beer, i) =>
            <ListItem key={`botw-${i}`}>
              <Image style={{
                height: 40,
                width: 10
              }}
              source={{uri: APIHost + '/' + beer.icon}} />
              <Body style={{marginLeft: 30}}>
                <Text style={{fontFamily: 'quicksand-regular'}}>{beer.name} from {beer.brewery}</Text>
              </Body>
            </ListItem>)}
        </List>
      </View>
    )
  }
}

let mapDispatchToProps = dispatch => ({setBeersOfTheWeek: (beers) => dispatch(setBeersOfTheWeek(beers)) })
let mapStateToProps = state => ({featuredBeers: state.featuredBeers})
export default connect(mapStateToProps, mapDispatchToProps)(BOTWScreen);
