import React from 'react';
import {getHeroCards} from '../../ajax/ajax';
import {setHeros} from '../../actions/actions';
import {connect} from 'react-redux';
import {View} from 'react-native';
import HeroCard from './HeroCard';
import Carousel from 'react-native-snap-carousel';

class HeroCards extends React.Component {
  componentDidMount() {
    let {setHeros} = this.props
    getHeroCards()
    .then(cards => setHeros(cards))
  }

  _renderItem ({item, index}) {
        return (
            <HeroCard item={item} />
        );
    }

    render () {
      let {cards} = this.props;
        return (
            <Carousel
              data={cards}
              renderItem={this._renderItem}
              sliderWidth={400}
              itemWidth={400}
            />
        );
    }
}





let mapDispatchToProps = dispatch => ({setHeros: (cards) => dispatch(setHeros(cards))});
let mapStateToProps = (state) => ({cards: state.featuredHeros})
let HeroCardsContainer = connect(mapStateToProps, mapDispatchToProps)(HeroCards);
export default HeroCardsContainer;
