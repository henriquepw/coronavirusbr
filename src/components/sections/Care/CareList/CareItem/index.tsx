import React, { FC } from 'react';

import { Container, Title } from './styles';

interface Props {
  title: string;
  text: string;
  inverted?: boolean;
  icon: string;
  alt: string;
}

const CareItem: FC<Props> = ({ title, text, inverted, icon, alt }) => (
  <Container inverted={inverted}>
    <img src={icon} alt={alt} />
    <div>
      <Title>{title}</Title>
      <p>{text}</p>
    </div>
  </Container>
);

export default CareItem;
