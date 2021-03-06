import {APIHost} from '../environment/config';

export let getBeersOfTheWeek = () =>
  fetch(APIHost + '/beers')
  .then(res => res.json())

export let getSpiritsOfTheWeek = () =>
  fetch('/spirits')
  .then(res => res.json())

export let createAccount = (user) =>
  fetch(APIHost + '/users', {
    body: JSON.stringify(user),
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(res => res.json())

export let signIn = (user) =>
  fetch(APIHost + '/signin', {
    body: JSON.stringify(user),
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(res => res.status >= 400 ? Promise.reject('failed') : res.json())

export let getProfileThumbnailImage = (token) =>
  fetch('/profile', {
    body: JSON.stringify(token),
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(res => res.status >= 400 ? Promise.reject('failed') : res.json())

export let getUserProfile = (token) => {
  console.log(token);
  return (
    fetch(APIHost + '/my-profile', {
      method: 'GET',
      headers: {
        authorization: token,
        'content-type': 'application/json'
      }
    })
    .then(res => res.status >= 400 ? Promise.reject('failed') : res.json())
  )
}
export let getHeroCards = () =>
  fetch(APIHost + '/heros')
  .then(res => res.json())

export let getPairingCards = () =>
  fetch(APIHost + '/pairings')
  .then(res => res.json())

export let getAdditionalBeers = (type) =>
    fetch(APIHost + '/similar-beers', {
      method: 'POST',
      body: JSON.stringify({type: type}),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => res.json())

export let getAdditionalPairingsByGenre = (genre) =>
  fetch('/genres', {
    method: 'POST',
    body: JSON.stringify({genre: genre}),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(res => res.json())

export let ratePairing = (rating, token) =>
  fetch(APIHost + '/ratings', {
    method: 'POST',
    body: JSON.stringify(rating),
    headers: {
      'content-type': 'application/json',
      authorization: token
    }
  })
  .then(res => res.json())

export let getShelf = (token) =>
  fetch(APIHost + '/my-shelf', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      authorization: token
    }
  })
  .then(res => res.json())


export let getPairing = (id) =>
  fetch('/featured-pairing', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      id: id
    }
  })
  .then(res => res.json())

export let uploadImage = (data, token) =>
  fetch('/upload', {
    method: 'POST',
    body: data,
    headers: {
      authorization: token.token,
    }
  })
  .then(res => res.json())
