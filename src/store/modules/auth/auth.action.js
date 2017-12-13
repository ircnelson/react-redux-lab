import { auth } from '../../../constants'
import types from '../../types'

const provider = new auth.GoogleAuthProvider()

export const startListeningToAuth = () => (dispatch, getState) => {
  auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch({
        type: types.AUTH_LOGIN,
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL
      })
    } else if (getState().auth.currently !== 'ANONYMOUS') {
      // log out if not already logged out
      dispatch({ type: types.AUTH_LOGOUT })
    }
  })
}

export const attemptLogin = () => (dispatch, getState) => {
  dispatch({ type: types.AUTH_ATTEMPTING_LOGIN })

  auth()
    .signInWithPopup(provider)
    .then((error, user) => {
      if (error) {
        // dispatch({ type: 'DISPLAY_ERROR', error:"Login failed! "+error })
        dispatch({ type: types.AUTH_LOGOUT })
      }
    })
    .catch((error) => {
      dispatch({ type: types.AUTH_LOGOUT })
    })
}

export const logout = () => (dispatch, getState) => {
  auth()
    .signOut()
    .then((error, _) => {
      if (!error) {
        dispatch({ type: types.AUTH_LOGOUT })
      }
    })
}
