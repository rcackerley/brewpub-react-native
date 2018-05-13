import React from 'react';
import {View, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import {getBeersOfTheWeek, getSpiritsOfTheWeek} from '../../ajax/ajax';
import {setBeersOfTheWeek} from '../../actions/actions';
import {List, ListItem, Thumbnail, Body} from 'native-base';

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
            <Thumbnail size={20}
            source={{uri: '../../' + beer.icon}} />
              <Body><Text>{beer.name}</Text></Body>
            </ListItem>)}
        </List>
      </View>
    )
  }
}

let mapDispatchToProps = dispatch => ({setBeersOfTheWeek: (beers) => dispatch(setBeersOfTheWeek(beers)) })
let mapStateToProps = state => ({featuredBeers: state.featuredBeers})
export default connect(mapStateToProps, mapDispatchToProps)(BOTWScreen);
