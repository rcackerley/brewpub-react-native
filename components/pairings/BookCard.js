import React from 'react';
import {Card, CardItem, Body, Text} from 'native-base'
import {Image} from 'react-native';
import {APIHost} from '../../environment/config';
import BookPairings from './BookPairings';
import BottleRatings from '../utility/Ratings';
import {getAdditionalBeers} from '../../ajax/ajax';
import {setPairings} from '../../actions/actions';
import {connect} from 'react-redux';

class BookCard extends React.Component {

  render() {
    let {book, token} = this.props;
    return (
        <Card style={{
          width: '95%',
          marginTop: 40,
        }} >
          <CardItem>
              <Image style={{
                shadowOffset:{  width: 400,  height: 300  },
                shadowColor: '#000',
                shadowOpacity: .90,
                shadowRadius: 4,
                width: 100,
                height: 165,
                position: 'relative',
                top: -30
              }} source={{uri: APIHost + '/' + book.image}} />
              <Image style={{
                width: 25,
                height: 100,
                left: -12,
                top: 4
              }} source={{uri: APIHost + '/' + book.icon}} />
              <Body style={{marginLeft: 5}}>
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
                <BottleRatings id={book["pairings.id"]} reviews={book.reviews} stars={book.stars} orange={'orange'} token={token} />
                <Text style={{
                  fontFamily: 'quicksand-regular',
                  fontSize: 12,
                  color: '#362c1e'
                }}>{book.description}</Text>
              </Body>
          </CardItem>
          <CardItem>{
            book.pairings && <BookPairings pairings={book.pairings} />}</CardItem>
        </Card>
    )
  }
}


  let mapDispatchToProps = dispatch => ({setPairings: (book) => dispatch(setPairings(book))})
  let mapStateToProps = state => ({
    token: state.token,
  })
  let BookCardContainer = connect(mapStateToProps, mapDispatchToProps)(BookCard)

  export default BookCardContainer
