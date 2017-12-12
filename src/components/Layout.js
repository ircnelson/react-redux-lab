import React from 'react'
import { NavLink } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

export default ({ children }) => (
    <Layout>
        <Sider breakpoint="lg" collapsedWidth="0">

            <div className="logo" style={{ 'height': '32px', 'margin': '16px', 'backgroundColor': 'rgba(255,255,255,.2)' }} />

            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <NavLink exact to="/">
                        <Icon type="home" />
                        <span>Home</span>
                    </NavLink>
                </Menu.Item>

                <Menu.Item key="2">
                    <NavLink exact to="/users">
                        <Icon type="user" />
                        <span>Users</span>
                    </NavLink>
                </Menu.Item>
            </Menu>
        </Sider>
        <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '24px 16px 0' }}>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    {children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>React + Redux Sample ©2017 Created by ircnelson</Footer>
        </Layout>
    </Layout>
)