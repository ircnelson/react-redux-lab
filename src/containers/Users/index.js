import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Action from '../../store/actions'

class UsersContainer extends React.Component {

    componentWillMount() {
        this.props.getAllUsers()
    }

    render() {

        const { items, loading } = this.props

        const Loading = loading ? <div>Loading...</div> : null

        return (
            <div>
                {Loading}
                <ul>
                    { items.map(item => <li key={item.id}>{JSON.stringify(item)}</li>) }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({ ...state.user })
const mapDispatchToProps = dispatch => bindActionCreators(Action, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)