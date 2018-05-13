import {setBeersOfTheWeek, setSpiritsOfTheWeek, setToken, setUserImage, setUser,
  setHeros, setBooks, setPairings, setShelf, toggleModal, setVisibleBooks} from '../actions/actions';

const initialState = {
  featuredHeros: [],
  featuredBeers: [],
  featuredSpirits: [],
  user: {
    image: 'images/placeholder.png',
    name: null
  },
  books: [],
  token: null,
  shelf: [],
  modalInvisible: true,
  visibleBooks: []
}

const reducerRoutes = {
  [setBeersOfTheWeek]: (state, action) => ({
    ...state, featuredBeers: action.payload
  }),
  [setSpiritsOfTheWeek]: (state, action) => ({
    ...state, featuredSpirits: action.payload
  }),
  [setToken]: (state, action) => ({
   ...state, token: action.payload
 }),
 [setUserImage]: (state, action) => ({
  ...state, user: {...state.user, image: action.payload}
  }),
  [setUser]: (state, action) => ({
    ...state, user: action.payload
  }),
  [setHeros]: (state, action) => ({
    ...state, featuredHeros: action.payload
  }),
  [setBooks]: (state, action) => ({
    ...state, books: action.payload
  }),
  [setPairings]: (state, action) => ({
    ...state, books: state.books.filter(book => book.title !== action.payload.title).concat([action.payload])
  }),
  [setShelf]: (state, action) => ({
    ...state, shelf: action.payload
  }),
  [toggleModal]: (state) => ({
    ...state, modalInvisible: !state.modalInvisible
  }),
  [setVisibleBooks]: (state, action) => ({
    ...state, visibleBooks: action.payload
  }),
  default: (state, action) => state
}

const rootReducer = (state = initialState, action) => {
  let reducerAction = reducerRoutes[action.type] || reducerRoutes.default
  return reducerAction(state, action)
}


export default rootReducer;
