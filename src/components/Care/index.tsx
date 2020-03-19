import React from 'react';

import Title from '~/components/Title';

import CareItem from './CareItem';

import { Container } from './styles';

function Care() {
  return (
    <Container>
      <Title title="Cuidados" subtitle="De acordo com a OMS e o SUS" />

      <div className="care-list-container">
        <div className="care-list">
          <CareItem text="Depois de brincar no chão de areia a tarde inteira" />
          <CareItem text="Antes de comer, beber, lamber, pegar na mamadeira" />
          <CareItem
            text="Lava uma (mão), lava outra (mão)
                  Lava uma, lava outra (mão)
                  Lava uma"
          />
        </div>
        <div className="vertical-divider" />
        <div className="care-list">
          <CareItem text="A doença vai embora junto com a sujeira" inverted />
          <CareItem
            text="Vermes, bactérias, mando embora embaixo da torneira"
            inverted
          />
          <CareItem
            text="Água uma, água outra
                  Água uma (mão), água outra
                  Água uma"
            inverted
          />
        </div>
      </div>
    </Container>
  );
}

export default Care;
