export const setBeersOfTheWeek = beers =>
  ({
    type: setBeersOfTheWeek.toString(),
    payload: beers
  });

export const setSpiritsOfTheWeek = spirits =>
  ({
    type: setSpiritsOfTheWeek.toString(),
    payload: spirits
  })

export const setToken = token =>
  ({
    type: setToken.toString(),
    payload: token
  })

export const setUserImage = image =>
  ({
    type: setUserImage.toString(),
    payload: image
  })

export const setUser = user =>
  ({
    type: setUser.toString(),
    payload: user
  })

export const setHeros = cards =>
  ({
    type: setHeros.toString(),
    payload: cards
  })

export const setBooks = pairings =>
  ({
    type: setBooks.toString(),
    payload: pairings
  })

export const setPairings = beers =>
  ({
    type: setPairings.toString(),
    payload: beers
  })

export const setShelf = books =>
  ({
    type: setShelf.toString(),
    payload: books
  })

export const toggleModal = () =>
  ({
    type: toggleModal.toString()
  })

export const setVisibleBooks = books =>
  ({
    type: setVisibleBooks.toString(),
    payload: books
  })

setBeersOfTheWeek.toString = () => 'SET_BEERS_OF_THE_WEEK';
setSpiritsOfTheWeek.toString = () => 'SET_SPIRITS_OF_THE_WEEK';
setToken.toString = () => 'SET_TOKEN';
setUserImage.toString = () => 'SET_USER_IMAGE';
setUser.toString = () => 'SET_USER';
setHeros.toString = () => 'SET_HEROS';
setBooks.toString = () => 'SET_BOOKS';
setPairings.toString = () => 'SET_PAIRINGS';
setShelf.toString = () => 'SET_SHELF';
toggleModal.toString = () => 'TOGGLE_MODAL';
setVisibleBooks.toString = () => 'SET_VISIBLE_BOOKS';
