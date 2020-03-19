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
    <Container>
      <div>
        <h1>Coronavírus BR</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
        </p>
        <Button href="#">Saiba mais</Button>
      </div>
      <Img fluid={image.sharp.fluid} />
    </Container>
  );
};

export default Home;
