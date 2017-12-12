import React from 'react'
import { Layout } from 'antd';

import AppSidebar from './Sidebar'

const { Header, Content, Footer } = Layout;

class AppLayout extends React.Component {

    render() {
        
        const { children } = this.props
        
        return (
            <Layout>
                <AppSidebar {...this.props} />
                
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
    }
}

export default AppLayout