import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Action from '../../store/actions'

import { Spin, Table } from 'antd'

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    }
]

class UsersContainer extends React.Component {

    componentWillMount() {
        this.props.getPagedUsers()
    }

    handleTableChange = (pagination, filters, sorter) => {
        this.props.getPagedUsers(pagination.current)
    }

    render() {

        const { items, loading, pagination } = this.props

        return (
            <div>
                <Spin spinning={loading}>
                    <Table rowKey="id" onChange={this.handleTableChange} pagination={pagination} dataSource={items} columns={columns} />
                </Spin>
            </div>
        )
    }
}

const mapStateToProps = state => ({ ...state.user })
const mapDispatchToProps = dispatch => bindActionCreators(Action, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)