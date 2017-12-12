import { createReducer } from '../../../util'
import types from '../../types'
import initialState from './user.initialState'

export default createReducer(initialState, {
    [`${types.GET_ALL_USERS}_PENDING`]: (state, data) => {
        return {
            ...state,
            loading: true
        }
    },

    [`${types.GET_ALL_USERS}_SUCCESS`]: (state, { data, total }, params) => {
        return {
            ...state,
            loading: false,
            items: data,
            pagination: {
                current: params.page,
                total
            }
        }
    }
})