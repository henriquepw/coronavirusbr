import styled from 'styled-components';

import media from '~/styles/media';
import section from '~/styles/section';

export const Container = styled(section)`
  padding: 104px 32px 80px 32px;

  div:nth-of-type(2) {
    max-width: 1021px;
    margin: 0 auto;
  }

  h2 {
    font-size: 2.5rem;
    margin: 62px 0 32px;
  }

  p {
    font-size: 1.6rem;
  }

  strong {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.active};
  }

  ul {
    display: grid;
    grid-template-columns: auto auto;
    gap: 64px;

    font-size: 2.4rem;
    margin: 64px 0;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      span {
        margin-top: 16px;
      }
    }
  }

  @media (max-width: ${media.smallTablet}) {
    h2 {
      margin-bottom: 16px;
    }
  }

  @media (max-width: ${media.phone}) {
    img {
      height: 100px;
    }
  }
`;
