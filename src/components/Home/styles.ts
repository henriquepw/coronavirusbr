import styled from 'styled-components';

import media from '~/styles/media';
import section from '~/styles/section';

export const Container = styled(section)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  visibility: hidden;

  div:first-of-type {
    p,
    h1 {
      overflow: hidden;

      span {
        display: block;
      }
    }
  }

  h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.colors.active};
  }

  p {
    font-size: 3.6rem;
    max-width: 634px;

    padding-right: 32px;
    margin: 32px 0 96px 0;
  }

  div:nth-of-type(2) {
    position: relative;
    overflow: hidden;
    height: 100vh;
    width: 40%;

    z-index: 15;
    pointer-events: none;

    div {
      height: 100%;
      width: 100%;
    }

    span {
      height: 100%;
      width: 100%;

      top: 0;
      left: 0;
      position: absolute;
      background-color: ${({ theme }) => theme.colors.active};
    }
  }

  @media (min-width: ${media.smallTablet}) {
    padding-right: 0;
  }

  @media (max-width: ${media.smallDesktop}) {
    h1 {
      font-size: 3.2rem;
    }

    p {
      font-size: 2.4rem;
      margin: 16px 0 80px 0;
    }

    div:nth-of-type(2) {
      width: 55%;
    }
  }

  @media (max-width: ${media.tablet}) {
    div:nth-of-type(2) {
      z-index: 5;
    }
  }

  @media (max-width: ${media.smallTablet}) {
    min-height: 100vh;
    justify-content: flex-end;
    flex-direction: column-reverse;
    margin-bottom: 80px;

    height: 100px;
    width: 100%;

    div:nth-of-type(2) {
      margin-top: 80px;
      height: 35%;
      width: 100%;

      border: 2px solid ${({ theme }) => theme.colors.active};
      margin-bottom: 48px;
    }
  }

  @media (max-width: ${media.bigPhone}) {
    margin-bottom: 32px;

    p {
      margin: 8px 0 32px 0;
    }

    div:nth-of-type(2) {
      margin-bottom: 24px;
    }
  }
`;
