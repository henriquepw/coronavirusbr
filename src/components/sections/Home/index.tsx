import React, { FC, useEffect } from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import gsap from 'gsap';

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

  useEffect(() => {
    const tl = gsap.timeline();

    // prevents flashing
    gsap.to('#home', 0, { css: { visibility: 'visible' } });

    tl.from('#title span', 2, {
      y: '100%',
      ease: 'power3.out',
      stagger: {
        amount: 0.3,
      },
    })
      .to('#main-img span', 1.6, {
        x: '100%',
        ease: 'expo.inOut',
        delay: -0.8,
      })
      .from('#main-img img', 1.6, {
        scale: 1.4,
        ease: 'expo.inOut',
        delay: -1.2,
      });
  }, []);

  return (
    <Container id="home">
      <div id="title">
        <h1>
          <span>Coronavírus BR</span>
        </h1>
        <p>
          <span>Informando a população brasileira sobre o COVID-19</span>
        </p>
        <Button href="#o-que-e">Saiba mais</Button>
      </div>
      <div id="main-img">
        <Img fluid={image.sharp.fluid} />
        <span />
      </div>
    </Container>
  );
};

export default Home;
