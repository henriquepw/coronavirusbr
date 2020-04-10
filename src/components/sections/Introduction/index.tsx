import React, { FC } from 'react';

import { Link } from 'gatsby';

import Title from '~/components/Title';

import data from '~/assets/data/about.json';
import virus from '~/assets/svg/virus.svg';

import { Container } from './styles';

const Introduction: FC = () => (
  <Container id="o-que-e">
    <Title subtitle="Uma pequena introdução">O que é?</Title>

    <div>
      <h2>{data[0].title}</h2>
      <div>
        <img src={virus} alt="figura de um virus" />
        <p>{data[0].paragraph[0]}</p>
      </div>

      <h2>{data[1].title}</h2>
      <p>{data[1].paragraph[0]}</p>

      <Link to="/sobre">Mais detalhes</Link>
    </div>
  </Container>
);

export default Introduction;
