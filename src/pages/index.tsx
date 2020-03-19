import React, { FC } from 'react';

import SEO from '~/components/SEO';

import GlobalStyle from '~/styles/global';

const IndexPage: FC = () => (
  <>
    <GlobalStyle />
    <SEO title="Home" />
    <h1>Hi people</h1>
  </>
);

export default IndexPage;
