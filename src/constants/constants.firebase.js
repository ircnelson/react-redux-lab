import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDHvp9Y8d9h53OX3W_NkvYBNZlRvT2F3xE',
  authDomain: 'reactappsample.firebaseapp.com',
  databaseURL: 'https://reactappsample.firebaseio.com',
  projectId: 'reactappsample',
  storageBucket: 'reactappsample.appspot.com',
  messagingSenderId: '295705393997'
}

firebase.initializeApp(config)

export default {
  auth: firebase.auth
}
