import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'antd'

class DataSource extends React.Component {
  componentWillMount() {
    this.fetch()
  }

  handleTableChange = (pagination) => {
    this.fetch({ page: pagination.current })
  }

  fetch(args) {
    const { fetch } = this.props

    if (typeof fetch === 'function') fetch(args)
  }

  render() {
    const { items, loading, pagination } = this.props

    return (
      <div>
        <Table
          size="small"
          loading={loading}
          onChange={this.handleTableChange}
          pagination={pagination}
          dataSource={items}
          {...this.props}
        />
      </div>
    )
  }
}

export default DataSource

DataSource.propTypes = {
  fetch: PropTypes.any
}
