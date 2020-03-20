import React, { FC } from 'react';

import { Container } from './styles';

interface Props {
  text: string;
  inverted?: boolean;
}

const CareItem: FC<Props> = ({ text, inverted }) => (
  <Container>
    {!inverted ? <div className="icon" /> : ''}
    <p>{text}</p>
    {inverted ? <div className="icon" /> : ''}
  </Container>
);

export default CareItem;
