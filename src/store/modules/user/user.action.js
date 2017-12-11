import types from '../../types'

export function getAllUsers() {
    return {
        type: types.GET_ALL_USERS,
        payload: {
            promise: new Promise((resolve, reject) => {
                resolve({
                    data: []
                })
            })
        }
    }
}