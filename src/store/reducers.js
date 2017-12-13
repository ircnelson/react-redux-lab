import { combineReducers } from 'redux'

import user from './modules/user/user.reducer'
import auth from './modules/auth/auth.reducer'

export default combineReducers({
  user,
  auth
})
