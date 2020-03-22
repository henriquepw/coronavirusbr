import styled, { css } from 'styled-components';

import media from '~/styles/media';

export const Container = styled.header`
  width: 100%;
  max-width: 1536px;

  z-index: 10;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: ${media.tablet}) {
    background-color: transparent;
  }
`;

interface MenuProps {
  pressed?: boolean;
}

export const Menu = styled.nav<MenuProps>`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    align-items: center;

    font-size: 1.8rem;
  }

  svg {
    display: none;
    margin: 32px 0 0 32px;

    background-color: ${({ theme }) => theme.colors.background};
  }

  @media (max-width: ${media.tablet}) {
    svg {
      z-index: 5;
      display: block;
      cursor: pointer;

      color: ${({ theme }) => theme.colors.primaryText};
    }

    ul {
      flex-direction: column;
      justify-content: center;

      top: 0;
      position: absolute;

      width: 60%;
      height: 100vh;

      font-size: 2.4rem;
      font-weight: bold;

      background-color: ${({ theme }) => theme.colors.active};
      color: ${({ theme }) => theme.colors.background};

      transition: all 0.3s ease-out;
      transform: translateX(-100%);
    }

    ${({ pressed }) =>
      pressed &&
      css`
        svg {
          color: ${({ theme }) => theme.colors.background};
          background-color: transparent;
        }

        ul {
          transform: translateX(0);
        }
      `}
  }

  @media (max-width: ${media.bigPhone}) {
    svg {
      margin: 24px 0 0 24px;
    }

    ul {
      width: 100%;
    }
  }
`;
