import React, { FC } from 'react';

import { Container } from './styles';

const Footer: FC = () => (
  <Container>
    <p>Feito com carinho por estudantes da paraiba</p>
    <a
      href="http://github.com/henry-ns"
      rel="noopener noreferrer"
      target="_blank"
    >
      Saiba mais sobre a gente
    </a>
  </Container>
);

export default Footer;
