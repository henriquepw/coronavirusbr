import styled from 'styled-components';

import media from '~/styles/media';

interface Props {
  inverted?: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  flex-direction: ${({ inverted }) => (inverted ? 'row-reverse' : 'row')};

  div {
    margin: 0 40px;
    text-align: ${({ inverted }) => (inverted ? 'right' : 'left')};
    max-width: 563px;

    @media (max-width: ${media.phone}) {
      margin: 0 20px;
    }
  }

  p {
    font-size: 1.6rem;
  }

  img {
    width: 120px;
    height: 120px;
  }

  @media (max-width: ${media.smallDesktop}) {
    margin: 0 auto;
  }

  @media (max-width: ${media.phone}) {
    img {
      width: 96px;
      height: 96px;
    }
  }
`;

export const Title = styled.h6`
  font-size: 2.4rem;
  margin-bottom: 8px;
  font-weight: bold;
`;
