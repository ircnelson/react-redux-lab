import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Action from '../../store/actions'

import { Spin } from 'antd'

class UsersContainer extends React.Component {

    componentWillMount() {
        this.props.getAllUsers()
    }

    render() {

        const { items, loading } = this.props

        return (
            <div>
                <Spin spinning={loading}>
                    <ul>
                        { items.map(item => <li key={item.id}>{JSON.stringify(item)}</li>) }
                    </ul>
                </Spin>
            </div>
        )
    }
}

const mapStateToProps = state => ({ ...state.user })
const mapDispatchToProps = dispatch => bindActionCreators(Action, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)