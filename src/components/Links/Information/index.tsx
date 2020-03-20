import React, { FC } from 'react';

import Button from '~/components/Button';

import { Container } from './styles';

interface Props {
  data: {
    id: number;
    title: string;
    description: string;
    url: string;
    image: string;
  };
}

const Link: FC<Props> = ({ data }) => (
  <Container>
    <img src={data.image} alt={data.title} />
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
