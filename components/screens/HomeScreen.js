import React from 'react';
import {View, Text, Image} from 'react-native';
import Logo from '../navigation/Logo';
import {Card, CardItem, Body, Left} from 'native-base';
import {getHeroCards, getPairingCards} from '../../ajax/ajax';
import {setBooks, setVisibleBooks} from '../../actions/actions';
import {connect} from 'react-redux';

class HomeScreen extends React.Component {
  componentDidMount() {
    let {setBooks, setVisibleBooks} = this.props;
    getPairingCards()
    .then(pairings => {
      console.log(pairings);
      setBooks(pairings);
      setVisibleBooks(pairings.slice(0,4))
    })
  }
  static navigationOptions = {
    title: <Logo />,
  };

  render() {
    let {books} = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {
          books.map(book =>
            <Card key={book["pairings.id"]}>
              <CardItem>
                  <Body>
                    <Text>{book.title}</Text>
                    <Text note>{book.author}</Text>
                  </Body>
              </CardItem>
            </Card>
          )
        }
      </View>
    );
  }
}

let mapDispatchToProps = dispatch => ({
  setBooks: (books) => dispatch(setBooks(books)),
  setVisibleBooks: (books) => dispatch(setVisibleBooks(books))
})
let mapStateToProps = state => ({books: state.visibleBooks})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
