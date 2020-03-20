import React from 'react';

import Title from '~/components/Title';

import CareList from './CareList';

import { Container } from './styles';

function Care() {
  return (
    <Container>
      <Title title="Cuidados" subtitle="De acordo com a OMS e o SUS" />
      <CareList />
    </Container>
  );
}

export default Care;
