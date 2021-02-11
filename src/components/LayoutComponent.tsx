import * as React from "react";
import {Layout, Menu, Breadcrumb} from 'antd';

import './LayoutStyle.css';

const {Header, Footer, Content} = Layout;

export const LayoutComponent: React.FunctionComponent<{}> = ({children}) => {
    return(
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">To-Do List</Menu.Item>
                    <Menu.Item key="2">Something</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px', minHeight: '75vh' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                </Breadcrumb>
                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>{children}</Content>
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}
