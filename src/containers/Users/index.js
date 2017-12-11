import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Action from '../../store/actions'

class UsersContainer extends React.Component {

    componentWillMount() {
        this.props.getAllUsers()
    }

    render() {

        const { items } = this.props

        return (
            <div>
                <ul>
                    { items.map(item => <li>{JSON.stringify(item)}</li>) }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({ ...state.user })
const mapDispatchToProps = dispatch => bindActionCreators(Action, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)