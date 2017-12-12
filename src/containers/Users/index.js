import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Action from '../../store/actions'

import DataSource from '../../components/DataSource'

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    }
]

class UsersContainer extends React.Component {

    render() {
        return (
            <div>
                <DataSource rowKey="id" fetch={this.props.getAllUsers} columns={columns} {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = state => ({ ...state.user })
const mapDispatchToProps = dispatch => bindActionCreators(Action, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)