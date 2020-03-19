import React, { FC } from 'react';

import Footer from '~/components/Footer';
import Header from '~/components/Header';
import Home from '~/components/Home';
import SEO from '~/components/SEO';

import GlobalStyle from '~/styles/global';

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
