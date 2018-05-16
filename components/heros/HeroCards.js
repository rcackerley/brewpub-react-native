import React from 'react';
import {getHeroCards} from '../../ajax/ajax';
import {setHeros} from '../../actions/actions';
import {connect} from 'react-redux';
import {View} from 'react-native';
import HeroCard from './HeroCard';
import Carousel, { Pagination } from 'react-native-snap-carousel';

class HeroCards extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeSlide: 0
    }
  }
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
          <View>
            <Carousel
              data={cards}
              renderItem={this._renderItem}
              sliderWidth={400}
              itemWidth={400}
              onSnapToItem={(index) => this.setState({ activeSlide: index }) }
            />
            <Pagination dotsLength={cards.length} activeDotIndex={this.state.activeSlide} />
          </View>
        );
    }
}





let mapDispatchToProps = dispatch => ({setHeros: (cards) => dispatch(setHeros(cards))});
let mapStateToProps = (state) => ({cards: state.featuredHeros})
let HeroCardsContainer = connect(mapStateToProps, mapDispatchToProps)(HeroCards);
export default HeroCardsContainer;
