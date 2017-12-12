import { getPaged } from '../../../services/api.users'
import types from '../../types'

export function getPagedUsers(page = 1) {
    return {
        type: types.GET_ALL_USERS,
        payload: {
            promise: getPaged(page)
        },
        params: { page }
    }
}