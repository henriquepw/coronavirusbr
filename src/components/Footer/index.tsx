import React, { FC } from 'react';

import { Container } from './styles';

const Footer: FC = () => (
  <Container>
    <p>Feito com carinho por estudantes da Paraíba</p>
    <a
      href="http://github.com/henry-ns/coronavirusbr"
      rel="noopener noreferrer"
      target="_blank"
    >
      Saiba mais sobre a gente
    </a>
  </Container>
);

export default Footer;
