import React, { FC } from 'react';

import { Container } from './styles';

interface Props {
  text: string;
  inverted?: boolean;
  icon: string;
  alt: string;
}

const CareItem: FC<Props> = ({ text, inverted, icon, alt }) => (
  <Container inverted={inverted}>
    <img src={icon} alt={alt} />
    <p>{text}</p>
  </Container>
);

export default CareItem;
