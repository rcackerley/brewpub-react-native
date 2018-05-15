import React from 'react';
import {ScrollView, View} from 'react-native';
import {connect} from 'react-redux';
import {getShelf} from '../../ajax/ajax';
import {setShelf} from '../../actions/actions';
import BookShelfItem from '../account/BookShelfItem';

class MyShelfScreen extends React.Component {
  static navigationOptions = {
    title: 'My Bookshelf & Bar Cart',
  };

  componentDidMount() {
      let {token, setShelf} = this.props;
      token && getShelf(token)
      .then(books => setShelf(books))
      .catch(err => console.log(err))
  }

  render() {
    let {shelf} = this.props;
    return (
      <ScrollView>
      <View style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        {shelf && shelf.map(item => <BookShelfItem key={`shelf-${item["pairings.id"]}`} item={item} />)}
      </View></ScrollView>
    )
  }
}

let mapDispatchToProps = dispatch => ({setShelf: books => dispatch(setShelf(books))})
let mapStateToProps = state => ({shelf: state.shelf, token: state.token});
let MyShelfScreenContainer = connect(mapStateToProps, mapDispatchToProps)(MyShelfScreen);
export default MyShelfScreenContainer;
