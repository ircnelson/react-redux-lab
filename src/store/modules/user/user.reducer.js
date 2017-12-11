import { createReducer } from '../../../util'
import types from '../../types'
import InitialState from './user.initialState'

export default createReducer(new InitialState(), {
    [`${types.GET_ALL_USERS}_SUCCESS`]: (state, data) => {
        return state.set('users', data)
    }
})