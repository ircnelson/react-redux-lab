import * as user from './modules/user/user.action'
import * as auth from './modules/auth/auth.action'

export default {
    ...user,
    ...auth
}