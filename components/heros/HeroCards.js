import React from 'react';
import {getHeroCards} from '../../ajax/ajax';
import {setHeros} from '../../actions/actions';
import {connect} from 'react-redux';
import {ScrollView} from 'react-native';
import HeroCard from './HeroCard';

class HeroCards extends React.Component {
  componentDidMount() {
    let {setHeros} = this.props
    getHeroCards()
    .then(cards => setHeros(cards))
  }

  render() {
    let {cards} = this.props;
    return (
      <ScrollView horizontal={true}>
        {cards.map(card => <HeroCard key={`hero-${card["pairings.id"]}`}card={card} />)}
      </ScrollView>
    )
  }
}





let mapDispatchToProps = dispatch => ({setHeros: (cards) => dispatch(setHeros(cards))});
let mapStateToProps = (state) => ({cards: state.featuredHeros})
let HeroCardsContainer = connect(mapStateToProps, mapDispatchToProps)(HeroCards);
export default HeroCardsContainer;
