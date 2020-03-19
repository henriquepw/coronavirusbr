import React, { FC } from 'react';

import Home from '~/components/Home';
import SEO from '~/components/SEO';

import GlobalStyle from '~/styles/global';

const IndexPage: FC = () => (
  <>
    <GlobalStyle />
    <SEO title="Home" />
    <Home />
  </>
);

export default IndexPage;
