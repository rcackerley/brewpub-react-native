import React from 'react';
import {getAdditionalBeers} from '../../ajax/ajax';
import {setPairings} from '../../actions/actions';
import {connect} from 'react-redux';
import BookCard from './BookCard';

class SimilarBeersMiddleLayer extends React.Component {
  componentDidMount() {
    let { book, setPairings } = this.props;
    getAdditionalBeers(book.type)
    .then(beers => {
      let newBook = Object.assign({}, book);
      newBook.pairings = beers;
      return setPairings(newBook)})
  }
  render () {
    let {book, token} = this.props;
    return (
        <BookCard book={book} token={token} />
    )
  }
}



let mapDispatchToProps = dispatch => ({setPairings: (book) => dispatch(setPairings(book))})
let mapStateToProps = state => ({token: state.token})
let SimilarBeersMiddleLayerCon = connect(mapStateToProps, mapDispatchToProps)(SimilarBeersMiddleLayer)

export default SimilarBeersMiddleLayerCon
