import React from 'react';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { App, Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import AppLayoutSider from './components/AppLayoutSider';
import AppLayoutFooter from './components/AppLayoutFooter';
import AppLayoutHeader from './components/AppLayoutHeader';

const { Header, Content, Footer, Sider } = Layout;

const AppLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <App style={{ minHeight: '100vh' }}>
      <Layout>
        <AppLayoutHeader></AppLayoutHeader>
        <Layout style={{ minHeight: '100vh', marginTop: '60px' }}>
          <AppLayoutSider></AppLayoutSider>
          <Layout>
            <Content style={{ margin: '24px 16px 0' }}>
              <div
                style={{
                  padding: 24,
                  minHeight: 360,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                <Outlet></Outlet>
              </div>
            </Content>
            <AppLayoutFooter></AppLayoutFooter>
          </Layout>
        </Layout>
      </Layout>
    </App>
  );
};

export default AppLayout;
