import React from 'react';

import Title from '../Title';
import Information from './Information';

import { Container } from './styles';

const DATA = [1, 2, 3, 4, 5];

function Links() {
  return (
    <Container id="links">
      <Title title="Links úteis" subtitle="Para você não ficar perido" />

      <ul>
        {DATA.map(item => (
          <Information
            key={item}
            data={{
              title: 'title',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel',
              url: 'http://google.com/',
              image: 'https://api.adorable.io/avatars/321/corona@virus.png',
            }}
          />
        ))}
      </ul>
    </Container>
  );
}

export default Links;
