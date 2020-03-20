import React, { useMemo, useEffect } from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import { FluidObject } from 'gatsby-image';

import Title from '../Title';
import Information from './Information';

import data from '~/assets/data/links.json';

import { Container } from './styles';

interface Query {
  allFile: {
    edges: {
      node: {
        name: string;
        sharp: {
          fluid: FluidObject;
        };
      };
    }[];
  };
}

function Links() {
  const images = useStaticQuery<Query>(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "links" } }) {
        edges {
          node {
            name
            sharp: childImageSharp {
              fluid(maxHeight: 321, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  const dataWithImages = useMemo(
    () =>
      data.map(item => {
        const currentImg = images.allFile.edges.filter(
          ({ node }) => node.name === `${item.id}`
        )[0];

        return {
          ...item,
          fluid: currentImg.node.sharp.fluid,
        };
      }),
    [images.allFile.edges]
  );

  return (
    <Container id="links">
      <Title title="Links úteis" subtitle="Para você não ficar perido" />

      <ul>
        {dataWithImages.map(item => (
          <Information key={`${item.id}_${item.title}`} data={item} />
        ))}
      </ul>
    </Container>
  );
}

export default Links;
