import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'

const { Sider } = Layout;

class AppSidebar extends React.Component {
    render() {
        const { menus, location } = this.props

        const menuSelected = menus.map((menu, index) => ({ index, path: menu.path })).filter(menu => menu.path === location.pathname).map(menu => menu.index.toString())

        return (
            <Sider breakpoint="lg" collapsedWidth="0">

                <div className="logo" style={{ 'height': '32px', 'margin': '16px', 'backgroundColor': 'rgba(255,255,255,.2)' }} />

                <Menu theme="dark" mode="inline" defaultSelectedKeys={menuSelected}>

                    {menus.map((menu, index) => (<Menu.Item key={index}>
                        <NavLink exact to={menu.path}>
                            <Icon type={menu.icon} />
                            <span>{menu.displayText}</span>
                        </NavLink>
                    </Menu.Item>))}
                </Menu>
            </Sider>
        )
    }
}

export default withRouter(AppSidebar)

AppSidebar.propTypes = {
    menus: PropTypes.arrayOf(PropTypes.shape({
        path: PropTypes.string.isRequired,
        exact: PropTypes.bool,
        displayText: PropTypes.string,
        icon: PropTypes.string
    }))
}