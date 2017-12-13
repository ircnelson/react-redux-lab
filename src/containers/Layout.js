import { connect } from 'react-redux'
import actions from '../store/actions'
import { withRouter } from 'react-router'
import Component from '../components/Layout'

const mapStateToProps = state => ({ user: state.auth })
const mapDispatchToProps = dispatch => ({
    onSignInPress: () => dispatch(actions.attemptLogin()),
	onSignOutPress: () => dispatch(actions.logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Component))