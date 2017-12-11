import { createReducer } from '../../../util'
import types from '../../types'
import initialState from './user.initialState'

export default createReducer(initialState, {
    [`${types.GET_ALL_USERS}_SUCCESS`]: (state, data) => {
        return {
            ...state,
            items: data
        }
    }
})