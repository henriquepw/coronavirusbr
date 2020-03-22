import React from 'react';

import careImages from '~/utils/careImages';

import CareItem from './CareItem';

import cares from '~/assets/data/cares.json';

import { Container, VerticalDivider } from './styles';

function CareList() {
  return (
    <Container>
      {cares.map(({ id, title, text, icon, alt }) => (
        <CareItem
          key={id}
          title={title}
          text={text}
          icon={careImages[icon]}
          alt={alt}
          inverted={!!(Number(id) % 2)}
        />
      ))}
      <VerticalDivider />
    </Container>
  );
}

export default CareList;
