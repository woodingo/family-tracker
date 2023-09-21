import React from 'react';
import { Layout } from 'antd';
import css from './App.module.less';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className={css.layout}>
      <Header className={css.header}>Header</Header>
      <Content className={css.content}>Content</Content>
      <Footer className={css.footer}>Footer</Footer>
    </Layout>
  );
}

export default App;
