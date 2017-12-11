import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'

import initState from './initialState'
import rootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

var logger = store => next => action => {
	console.log('dispatching', action.type,action)
	
	let result = next(action)

	console.log('next state', store.getState())
	
	return result
}

const store = createStore(rootReducer, initState, composeEnhancers(applyMiddleware(thunkMiddleware, logger)))

export default store