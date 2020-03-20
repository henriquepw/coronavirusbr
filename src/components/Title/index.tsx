import React, { FC } from 'react';

import { Container } from './styles';

interface Props {
  title: string;
  subtitle: string;
}

const Title: FC<Props> = ({ title, subtitle }) => (
  <Container>
    <h1>{title}</h1>
    <hr />
    <h6>{subtitle}</h6>
  </Container>
);

export default Title;
