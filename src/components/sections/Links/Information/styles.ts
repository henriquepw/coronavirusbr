import styled from 'styled-components';

import media from '~/styles/media';

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  > div:first-of-type {
    width: 100%;
    height: 100%;

    max-width: 315px;
    max-height: 321px;
  }

  > div:nth-of-type(2) {
    margin-left: 48px;

    h1 {
      font-size: 2.4rem;
      max-width: 658px;
    }

    p {
      font-size: 1.6rem;
      max-width: 800px;
      margin: 16px 0 64px;
    }
  }

  @media (max-width: ${media.smallTablet}) {
    flex-direction: column;

    > div:first-of-type {
      max-width: 90%;
      margin-bottom: 48px;

      border: 2px solid ${({ theme }) => theme.colors.active};
    }

    > div:nth-of-type(2) {
      margin-left: 0px;
      max-width: 90%;

      p {
        margin-bottom: 32px;
      }
    }
  }

  @media (max-width: ${media.phone}) {
    > div:first-of-type,
    > div:nth-of-type(2) {
      max-width: 100%;
    }
  }
`;
