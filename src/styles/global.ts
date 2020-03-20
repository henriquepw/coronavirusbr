import { createGlobalStyle } from 'styled-components';

import media from './media';

export default createGlobalStyle`
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-thumb {
    transition: 0.2s;
    border-radius: 2.5px;
    background: ${({ theme }) => theme.colors.active};

    &:hover {
      background: ${({ theme }) => theme.colors.activeDark};
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::selection {
      background-color: ${({ theme }) => theme.colors.active};
      color: ${({ theme }) => theme.colors.background};
    }
  }

  html {
    scroll-behavior: smooth;

    overflow-x: hidden;
  }

  html, body {
    font: 62.5% 'Poppins', sans-serif;
    font-weight: 400;

    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primaryText};

    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    @media(max-width: ${media.phone}) {
      font: 54.6875% 'Poppins', sans-serif;
    }
  }

  body.using-mouse {
    * {
      outline: none !important;
    }
  }

  #gatsby-focus-wrapper {
    position: relative;

    margin: 0 auto;

    max-width: 1536px;
    min-height: 100%;

    @media (max-width: ${media.smallTablet}) {
      overflow: hidden;
    }
  }

  button {
    font: 62.5% 'Poppins', sans-serif;
    font-weight: 400;

    background: transparent;
    border: none;
  }

  a,
  button {
    color: ${({ theme }) => theme.colors.primaryText};
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }

  li {
    list-style-type: none;
  }
`;
