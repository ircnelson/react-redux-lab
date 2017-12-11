import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Action from '../../store/actions'

class UsersContainer extends React.Component {

    componentWillMount() {
        this.props.getAllUsers()
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.state)}
                
            </div>
        )
    }
}

const mapStateToProps = state => ({ user: state.user })
const mapDispatchToProps = dispatch => bindActionCreators(Action, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)