import types from '../../types'
import initialState from './auth.initialState'

export default (state = initialState, action) => {
    switch (action.type) {
        case types.AUTH_LOGIN:
            return {
                ...state,
                currently: 'LOGGED_IN',
                uid: action.uid,
                displayName: action.displayName,
                photoURL: action.photoURL
            }
        case types.AUTH_LOGOUT:
            return {
                ...state,
                currently: 'ANONYMOUS',
                uid: null,
                displayName: 'Guest',
                photoURL: null
            }
        case types.AUTH_ATTEMPTING_LOGIN:
            return {
                ...state,
                currently: 'AWAITING_AUTH_RESPONSE'
            }
        default:
            return state
    }
}