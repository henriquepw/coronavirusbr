import React, { FC } from 'react';

import { Container } from './styles';

interface Props {
  href: string;
  secondary?: boolean;
}

const Button: FC<Props> = ({ children, href, secondary }) => (
  <Container secondary={secondary} href={href}>
    {children}
  </Container>
);

export default Button;
