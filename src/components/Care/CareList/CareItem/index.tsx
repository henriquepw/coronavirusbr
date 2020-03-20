import React, { FC } from 'react';

import { Container, Icon } from './styles';

interface Props {
  text: string;
  inverted?: boolean;
}

const CareItem: FC<Props> = ({ text, inverted }) => (
  <Container inverted={inverted}>
    <Icon />
    <p>{text}</p>
  </Container>
);

export default CareItem;
