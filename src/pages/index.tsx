import React, { FC } from 'react';

import Layout from '~/Layout';

import Care from '~/components/sections/Care';
import Home from '~/components/sections/Home';
import Links from '~/components/sections/Links';

const IndexPage: FC = () => (
  <Layout title="Home">
    <Home />
    <Care />
    <Links />
  </Layout>
);

export default IndexPage;
