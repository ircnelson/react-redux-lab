import React from 'react'
import { Menu, Layout, Icon } from 'antd';

import AppSidebar from './Sidebar'

const { Header, Content, Footer } = Layout;

class AppLayout extends React.Component {

    render() {
        
        const { children } = this.props
        
        return (
            <Layout>
                <AppSidebar {...this.props} />
                
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Menu mode="horizontal">
                            <Menu.SubMenu style={{ float: 'right' }} title={<span><Icon type="user" />Guest</span>}>
                                <Menu.Item key="logout">
                                    Sign out
                                </Menu.Item>
                            </Menu.SubMenu>                                
                        </Menu>
                    </Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>React + Redux Sample ©2017 Created by ircnelson</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default AppLayout