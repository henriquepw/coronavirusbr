import React, { FC } from 'react';

import Layout from '~/Layout';

import Care from '~/components/sections/Care';
import Home from '~/components/sections/Home';
import Introduction from '~/components/sections/Introduction';
import Links from '~/components/sections/Links';

const IndexPage: FC = () => (
  <Layout title="Home">
    <Home />
    <Introduction />
    <Care />
    <Links />
  </Layout>
);

export default IndexPage;
