import React from 'react';
import {ScrollView, Text, Image, View} from 'react-native';
import Logo from '../navigation/Logo';
import {getHeroCards, getPairingCards} from '../../ajax/ajax';
import {setBooks, setVisibleBooks} from '../../actions/actions';
import {connect} from 'react-redux';
import BookCard from '../pairings/BookCard';
import HeroCards from '../heros/HeroCards';

class HomeScreen extends React.Component {
  componentDidMount() {
    let {setBooks, setVisibleBooks} = this.props;
    getPairingCards()
    .then(pairings => {
      setBooks(pairings);
      setVisibleBooks(pairings)
    })
  }
  static navigationOptions = {
    title: <Logo />,
  };

  render() {
    let {books} = this.props;
    return (
      <ScrollView>
        <HeroCards />
        <View style={{alignItems: 'center',
                      justifyContent: 'center'}}>
        {
          books.map((book, i) => <BookCard key={`combo-${book["pairings.id"]}`} book={book} />)
        }
        </View>
      </ScrollView>
    );
  }
}

let mapDispatchToProps = dispatch => ({
  setBooks: (books) => dispatch(setBooks(books)),
  setVisibleBooks: (books) => dispatch(setVisibleBooks(books))
})
let mapStateToProps = state => ({books: state.visibleBooks})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
