import React from 'react';

import CareItem from './CareItem';

import { Container, VerticalDivider } from './styles';

function CareList() {
  return (
    <Container>
      <CareItem text="Depois de brincar no chão de areia a tarde inteira" />
      <CareItem text="A doença vai embora junto com a sujeira" inverted />

      <CareItem text="Antes de comer, beber, lamber, pegar na mamadeira" />
      <CareItem
        text="Vermes, bactérias, mando embora embaixo da torneira"
        inverted
      />
      <CareItem
        text="Lava uma (mão), lava outra (mão)
                  Lava uma, lava outra (mão)
                  Lava uma"
      />
      <CareItem
        text="Água uma, água outra
                  Água uma (mão), água outra
                  Água uma"
        inverted
      />
      <VerticalDivider />
    </Container>
  );
}

export default CareList;
