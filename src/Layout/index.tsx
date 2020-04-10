import React, { FC } from 'react';

import loadable from '@loadable/component';

import Footer from '~/components/Footer';
import SEO from '~/components/SEO';

import GlobalStyle from '~/styles/global';

const Header = loadable(() => import('~/components/Header'));

interface Props {
  title: string;
}

const Layout: FC<Props> = ({ children, title }) => (
  <>
    <GlobalStyle />
    <Header />
    <SEO title={title} />
    {children}
    <Footer />
  </>
);

export default Layout;
