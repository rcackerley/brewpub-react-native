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
        marginTop: 40,
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
              <Text style={{
                fontFamily: 'quicksand-bold',
                fontSize: 17,
                color: '#362c1e',
                marginBottom: 5
              }}>{book.title}</Text>
              <Text style={{
                fontFamily: 'quicksand-regular',
                fontSize: 15,
                color: '#362c1e',
                marginBottom: 10
              }}>by {book.author}</Text>
              <Text style={{
                fontFamily: 'quicksand-regular',
                fontSize: 12,
                color: '#362c1e'
              }}>{book.description}</Text>
            </Body>
        </CardItem>
        <CardItem>{book.pairings && <BookPairings pairings={book.pairings} />}</CardItem>
      </Card>
    )
  }
}

let mapDispatchToProps = dispatch => ({setPairings: (book) => dispatch(setPairings(book))})
let mapStateToProps = state => state;
let BookCardContainer = connect(mapStateToProps, mapDispatchToProps)(BookCard)
export default BookCardContainer
