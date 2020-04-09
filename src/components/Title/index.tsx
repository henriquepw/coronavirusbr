import React, { FC } from 'react';

import { Container } from './styles';

interface Props {
  subtitle?: string;
}

const Title: FC<Props> = ({ children, subtitle }) => (
  <Container>
    <h1>{children}</h1>
    <hr />
    {subtitle && <h6>{subtitle}</h6>}
  </Container>
);

export default Title;
