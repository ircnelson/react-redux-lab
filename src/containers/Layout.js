import { connect } from 'react-redux'
import actions from '../store/actions'

import Component from '../components/Layout'

const mapStateToProps = state => ({ user: state.auth })
const mapDispatchToProps = dispatch => ({
    onSignInPress: () => dispatch(actions.attemptLogin()),
	onSignOutPress: () => dispatch(actions.logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)