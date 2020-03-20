import React, { FC } from 'react';

import Img, { FluidObject } from 'gatsby-image';

import Button from '~/components/Button';

import { Container } from './styles';

interface Props {
  data: {
    id: number;
    title: string;
    description: string;
    url: string;
    fluid: FluidObject;
  };
}

const Link: FC<Props> = ({ data }) => (
  <Container>
    <Img fluid={data.fluid} />
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <Button href={data.url} secondary external>
        Acesse
      </Button>
    </div>
  </Container>
);

export default Link;
