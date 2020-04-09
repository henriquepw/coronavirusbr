import React, { FC } from 'react';

import Layout from '~/Layout';

import Care from '~/components/Care';
import Home from '~/components/Home';
import Links from '~/components/Links';

const IndexPage: FC = () => (
  <Layout title="Home">
    <Home />
    <Care />
    <Links />
  </Layout>
);

export default IndexPage;
