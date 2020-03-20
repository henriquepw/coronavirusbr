import React from 'react';

import Title from '../Title';
import Information from './Information';

import data from '~/assets/data/links.json';

import { Container } from './styles';

function Links() {
  return (
    <Container id="links">
      <Title title="Links úteis" subtitle="Para você não ficar perido" />

      <ul>
        {data.map(item => (
          <Information
            key={`${item.id}_${item.title}`}
            data={{
              ...item,
              image: 'https://api.adorable.io/avatars/321/corona@virus.png',
            }}
          />
        ))}
      </ul>
    </Container>
  );
}

export default Links;
