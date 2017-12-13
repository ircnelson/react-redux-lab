import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import actions from './actions'

import promiseMiddleware from './middlewares/promiseMiddleware'

import initState from './initialState'
import rootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const logger = (store) => (next) => (action) => {
  console.log('dispatching', action.type, action)

  const result = next(action)

  console.log('next state', store.getState())

  return result
}

const store = createStore(
  rootReducer,
  initState,
  composeEnhancers(
    applyMiddleware(
      thunkMiddleware,
      promiseMiddleware({
        promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'ERROR']
      }),
      logger
    )
  )
)

export default store
export { actions }
