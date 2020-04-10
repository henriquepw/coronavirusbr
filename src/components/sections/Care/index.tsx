import React from 'react';

import Title from '~/components/Title';

import CareList from './CareList';

import { Container } from './styles';

function Care() {
  return (
    <Container id="cuidados">
      <Title subtitle="De acordo com a Organização Mundial da Saúde (OMS) e o SUS">
        Cuidados
      </Title>
      <CareList />
    </Container>
  );
}

export default Care;
