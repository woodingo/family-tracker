import React, { FunctionComponent } from 'react';
import { Layout, Menu } from 'antd';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { theme } from '@/shared/config';
import { useRouter } from '@tanstack/react-router';

const { Header, Content, Sider } = Layout;

interface Props extends React.PropsWithChildren {}

const RootLayout: FunctionComponent<Props> = ({ children }) => {
  const cssLayout = useEmotionCss(() => ({
    overflow: 'hidden',
  }));

  const cssHeader = useEmotionCss(({ token }) => ({
    height: theme.headerHeight,
    color: token.colorText,
  }));

  const cssContent = useEmotionCss(({ token }) => ({
    padding: token.paddingLG,
  }));

  const cssContentContainer = useEmotionCss(({ token }) => ({
    overflow: 'auto',
    height: `calc(100 * var(--vh) - ${theme.headerHeight}px)`,
  }));

  const cssMenu = useEmotionCss(({ token }) => ({
    height: '100%',
  }));

  const router = useRouter();

  return (
    <Layout className={cssLayout}>
      <Header className={cssHeader}>Header</Header>
      <Layout>
        <Sider width={theme.siderWidth}>
          <Menu
            mode="inline"
            className={cssMenu}
            items={router.routeTree.children.map((route: any) => ({
              label: route.path,
              key: route.path,
            }))}
          />
        </Sider>
        <Layout className={cssContentContainer}>
          <Content className={cssContent}>{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default RootLayout;
