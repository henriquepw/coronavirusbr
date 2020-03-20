import React, { FC } from 'react';

import loadable from '@loadable/component';

import Footer from '~/components/Footer';
import Home from '~/components/Home';
import SEO from '~/components/SEO';

import GlobalStyle from '~/styles/global';

const Header = loadable(() => import('~/components/Header'));

const IndexPage: FC = () => (
  <>
    <GlobalStyle />
    <Header />
    <SEO title="Home" />
    <Home />
    <Footer />
  </>
);

export default IndexPage;
