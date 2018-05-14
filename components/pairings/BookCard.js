import React from 'react';
import {Card, CardItem, Body, Text} from 'native-base'
import {Image} from 'react-native';
import {APIHost} from '../../environment/config';
import BookPairings from './BookPairings';
import {getAdditionalBeers} from '../../ajax/ajax';
import {setPairings} from '../../actions/actions';
import {connect} from 'react-redux';

class BookCard extends React.Component {

  componentDidMount() {
    let { book, setPairings } = this.props;
    getAdditionalBeers(book.type)
    .then(beers => {
      book.pairings = beers;
      return setPairings(book)})
  }

  render() {
    let { book } = this.props;
    return (
      <Card style={{
        width: '95%',
        marginTop: 50,
      }} key={book["pairings.id"]}>
        <CardItem>
            <Image style={{
              shadowOffset:{  width: 20,  height: 30,  },
              shadowColor: 'black',
              shadowOpacity: .40,
              width: 100,
              height: 165,
              position: 'relative',
              top: -30
            }} source={{uri: APIHost + '/' + book.image}} />
            <Body style={{marginLeft: 20}}>
              <Text>{book.title}</Text>
              <Text>by {book.author}</Text>
              <Text>{book.description}</Text>
              {book.pairings && <BookPairings pairings={book.pairings} />}
            </Body>
        </CardItem>
      </Card>
    )
  }
}

let mapDispatchToProps = dispatch => ({setPairings: (book) => dispatch(setPairings(book))})
let mapStateToProps = state => state;
let BookCardContainer = connect(mapStateToProps, mapDispatchToProps)(BookCard)
export default BookCardContainer
