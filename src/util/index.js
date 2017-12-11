const defaultAction = {
    payload: {
        data: null
    },
    params: {}
}

export function createReducer(initialState, reducerMap) {
    return (state = initialState, action) => {
        const reducer = reducerMap[action.type]
        
        const mergedAction = Object.assign(defaultAction, action)

        return reducer ? reducer(state, mergedAction.payload.data, mergedAction.params) : state
    }
}

export function isPromise(value) {
    if (value !== null && typeof value === 'object') {
        return value.promise && typeof value.promise.then === 'function'
    }
}
