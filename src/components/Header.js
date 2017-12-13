import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Layout, Icon, Spin } from 'antd'

const { Header } = Layout

const MenuItems = ({ user, onSignInPress, onSignOutPress }) => {
  switch (user.currently) {
    case 'AWAITING_AUTH_RESPONSE':
    case 'ANONYMOUS':
      return (
        <Menu.Item key="googleSignIn">
          <Icon type="google" /> Sign-in with Google
        </Menu.Item>
      )

    default:
      return <Menu.Item key="signOut">Sign-out</Menu.Item>
  }
}

class AppHeader extends React.Component {
  handleMenuItem = ({ item, key, keyPath }) => {
    const { onSignInPress, onSignOutPress } = this.props

    switch (key) {
      case 'googleSignIn':
        return onSignInPress()
      default:
        return onSignOutPress()
    }
  }

  render() {
    const { user } = this.props

    return (
      <Header style={{ background: '#fff', padding: 0 }}>
        <Menu mode="horizontal" onClick={this.handleMenuItem}>
          <Menu.SubMenu
            style={{ float: 'right' }}
            title={
              <Spin spinning={user.currently === 'AWAITING_AUTH_RESPONSE'}>
                <span>
                  <Icon type="user" />
                  {user.displayName}
                </span>
              </Spin>
            }
          >
            {MenuItems(this.props)}
          </Menu.SubMenu>
        </Menu>
      </Header>
    )
  }
}

export default AppHeader

AppHeader.propTypes = {
  user: PropTypes.shape({
    currently: PropTypes.string,
    displayName: PropTypes.string.isRequired,
    photoURL: PropTypes.string
  }),

  onSignInPress: PropTypes.func,
  onSignOutPress: PropTypes.func
}
