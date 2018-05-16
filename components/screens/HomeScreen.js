import React from 'react';
import {ScrollView, Text, Image, View} from 'react-native';
import Logo from '../navigation/Logo';
import {getHeroCards, getPairingCards} from '../../ajax/ajax';
import {setBooks, setVisibleBooks} from '../../actions/actions';
import {connect} from 'react-redux';
import BookCard from '../pairings/BookCard';
import HeroCards from '../heros/HeroCards';
import Filters from '../pairings/Filters';
import {getAdditionalBeers} from '../../ajax/ajax';
import {setPairings} from '../../actions/actions';

class HomeScreen extends React.Component {
  async componentDidMount() {
    let {setVisibleBooks} = this.props;
    let books = await getPairingCards();
    let newBooksPromises = books.map(async book => {
      let beers = await getAdditionalBeers(book.type);
      let newBook = Object.assign({}, book);
      newBook.pairings = beers;
      return newBook;
    })
    let newBooks = await Promise.all(newBooksPromises)
    console.log(newBooks);
    setBooks(newBooks);
    setVisibleBooks(newBooks);
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
        <Filters />
        {
          books.map((book, i) => <BookCard key={`combo-${book["pairings.id"]}`} book={book} />)
        }
        </View>
      </ScrollView>
    );
  }
}

let mapDispatchToProps = dispatch => ({
  setPairings: (book) => dispatch(setPairings(book)),
  setVisibleBooks: (books) => dispatch(setVisibleBooks(books))
})
let mapStateToProps = state => ({books: state.visibleBooks})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
