import React, { FC } from 'react';

import loadable from '@loadable/component';

import Care from '~/components/Care';
import Footer from '~/components/Footer';
import Home from '~/components/Home';
import Links from '~/components/Links';
import SEO from '~/components/SEO';

import GlobalStyle from '~/styles/global';

const Header = loadable(() => import('~/components/Header'));

const IndexPage: FC = () => (
  <>
    <GlobalStyle />
    <Header />
    <SEO title="Home" />
    <Home />
    <Care />
    <Links />
    <Footer />
  </>
);

export default IndexPage;
