import React from 'react';
import {connect} from 'react-redux';
import {getAdditionalPairingsByGenre, getPairingCards} from '../../ajax/ajax';
import {setVisibleBooks} from '../../actions/actions';
import {View, Text} from 'react-native';
import {Button} from 'native-base';

let buttons = ["Fiction","Biography","Fantasy", "Literature", "Nonfiction"]
let Filters = ({books, setVisibleBooks}) => {
  return (
    <View>
      <Text style={{
        color: '#362c1e',
      }}>Browse Pairings by Genre</Text>
      <View style={{
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <Button transparent={true}
          onPress={
            event => setVisibleBooks(books.slice())
          }
        >
        <Text style={{
          fontSize: 12,
          marginRight: 10,
          color: '#362c1e',
          }}>all</Text>
        </Button>
        {buttons.map((buttonText,i) => <Button
            key={i}
            onPress={event => {
            let filteredBooks = books.filter(book => book.genre === buttonText);
            console.log(books);
            setVisibleBooks(filteredBooks)
            }}
            transparent={true}><Text style={{
            fontSize: 12,
            marginRight: 10,
            color: '#362c1e',
          }}>{buttonText.toLowerCase()}</Text></Button>)}
      </View>
    </View>
  )
}


let mapDispatchToProps = dispatch => ({setVisibleBooks: (books) => dispatch(setVisibleBooks(books))})
let mapStateToProps = state => ({books: state.books});
let FiltersContainer = connect(mapStateToProps, mapDispatchToProps)(Filters)
export default FiltersContainer;
