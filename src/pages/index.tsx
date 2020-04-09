import React, { FC } from 'react';

import Layout from '~/Layout';

import Care from '~/components/sections/Care';
import Home from '~/components/sections/Home';
import Introduction from '~/components/sections/Introduction';
import Links from '~/components/sections/Links';
import Symptoms from '~/components/sections/Symptoms';

const IndexPage: FC = () => (
  <Layout title="Home">
    <Home />
    <Introduction />
    <Symptoms />
    <Care />
    <Links />
  </Layout>
);

export default IndexPage;
