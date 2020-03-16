import React, { FC } from 'react';
import { HelmetProvider } from 'react-helmet-async';

interface Props {
  element: React.ReactNode;
}

export const wrapRootElement: FC<Props> = ({ element }) => (
  <HelmetProvider>{element}</HelmetProvider>
);
