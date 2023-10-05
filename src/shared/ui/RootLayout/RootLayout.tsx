import React, { FunctionComponent } from 'react';
import { Layout } from 'antd';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { theme } from '@/shared/config';

const { Header, Content, Footer } = Layout;

interface Props extends React.PropsWithChildren {}

const RootLayout: FunctionComponent<Props> = ({ children }) => {
  const cssLayout = useEmotionCss(({ token }) => ({
    overflow: 'hidden',
  }));

  const cssHeader = useEmotionCss(({ token }) => ({
    height: theme.headerHeight,
  }));

  const cssContent = useEmotionCss(({ token }) => ({
    height: `calc(100 * var(--vh) - ${theme.headerHeight}px - ${theme.footerHeight}px);`,
    overflow: 'auto',
  }));

  const cssFooter = useEmotionCss(({ token }) => ({
    height: theme.footerHeight,
  }));

  return (
    <Layout className={cssLayout}>
      <Header className={cssHeader}>Header</Header>
      <Content className={cssContent}>{children}</Content>
      <Footer className={cssFooter}>Footer</Footer>
    </Layout>
  );
};

export default RootLayout;
