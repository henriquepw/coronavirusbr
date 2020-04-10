import styled from 'styled-components';

import media from '~/styles/media';
import section from '~/styles/section';

export const Container = styled(section)`
  h1 {
    margin-top: 104px;
  }

  h2 {
    margin: 64px 0 32px;
    font-size: 2.4rem;
  }

  div:nth-of-type(2) {
    position: relative;

    max-width: 1021px;
    margin: 0 auto;

    div {
      display: flex;
      align-items: center;

      img {
        margin-right: 40px;
      }
    }

    @media (max-width: ${media.bigPhone}) {
      div {
        flex-direction: column;

        img {
          position: absolute;

          top: 0;
          left: 0;
        }
      }

      h2:first-of-type {
        padding-top: 174px;
      }

      h2 {
        margin-bottom: 16px;
      }
    }
  }

  p {
    font-size: 1.6rem;
  }

  a {
    display: inline-block;

    height: 50px;
    line-height: 50px;
    font-size: 1.6rem;

    padding: 0 32px;
    margin: 96px 0 80px 0;

    border-radius: 25px;
    border: 2px solid ${({ theme }) => theme.colors.active};

    transition: all 0.2s ease;
    backface-visibility: hidden;

    color: ${({ theme }) => theme.colors.primaryText};
    background-color: ${({ theme }) => theme.colors.background};
    border: ${({ theme }) => theme.colors.active} solid 2px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.active};
      color: ${({ theme }) => theme.colors.background};
    }

    &:active {
      transform: scale(0.98) translateY(0);
    }
  }
`;
