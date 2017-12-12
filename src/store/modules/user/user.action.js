import { getAll } from '../../../services/api.users'
import types from '../../types'

export function getAllUsers(filter = { page: 1}) {
    return {
        type: types.GET_ALL_USERS,
        payload: {
            promise: getAll(filter)
        },
        params: { ...filter }
    }
}