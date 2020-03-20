import React, { FC } from 'react';

import { Container } from './styles';

interface Props {
  href: string;
  secondary?: boolean;
  external?: boolean;
}

const Button: FC<Props> = ({ children, href, secondary, external }) => {
  const rel = external ? 'noopener noreferrer' : '';
  const target = external ? '_blank' : '_self';

  return (
    <Container secondary={secondary} href={href} rel={rel} target={target}>
      {children}
    </Container>
  );
};

Button.defaultProps = {
  secondary: false,
  external: false,
};

export default Button;
