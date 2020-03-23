import React, { FC } from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Button from '~/components/Button';

import { Container } from './styles';

const Home: FC = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "background.png" }) {
        sharp: childImageSharp {
          fluid(maxHeight: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Container id="home">
      <div>
        <h1>Coronavírus BR</h1>
        <p>Informando a população brasileira sobre o COVID-19</p>
        <Button href="#cuidados">Saiba mais</Button>
      </div>
      <Img fluid={image.sharp.fluid} />
    </Container>
  );
};

export default Home;
