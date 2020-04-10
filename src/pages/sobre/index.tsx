import React, { FC, Fragment } from 'react';

import Layout from '~/Layout';

import data from '~/assets/data/about.json';
import crown from '~/assets/svg/crown.svg';
import handWash from '~/assets/svg/hand-wash-2.svg';

import { Container } from './styles';

const icons = [
  {
    src: crown,
    alt: 'Coroa',
  },
  {
    src: handWash,
    alt: 'Lavando as mãos',
  },
];

const Sobre: FC = () => (
  <Layout title="sobre">
    <Container>
      <h1>Sobre</h1>

      {data.slice(0, 2).map(block => (
        <Fragment key={block.title}>
          <h2>{block.title}</h2>
          {block.paragraph.map(paragraph => (
            <p key={paragraph.slice(0, 10)}>{paragraph}</p>
          ))}
        </Fragment>
      ))}

      <h2>{data[2].title}</h2>
      <ul>
        {data[2].paragraph.map((paragraph, index) => (
          <li key={paragraph.slice(0, 10)}>
            <img src={icons[index].src} alt={icons[index].alt} />
            <p>{paragraph}</p>
          </li>
        ))}
      </ul>
    </Container>
  </Layout>
);

export default Sobre;
