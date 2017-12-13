import React from 'react'
import { Layout } from 'antd';

import AppHeader from './Header'
import AppSidebar from './Sidebar'

const { Content, Footer } = Layout;

class AppLayout extends React.Component {

    render() {
        
        const { children } = this.props

        return (
            <Layout>
                <AppSidebar {...this.props} />
                
                <Layout>
                    <AppHeader {...this.props} />

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