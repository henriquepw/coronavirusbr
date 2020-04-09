import styled from 'styled-components';

import media from '~/styles/media';
import section from '~/styles/section';

export const Container = styled(section)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  max-width: 939px;

  margin: 0 auto;
  padding: 96px 32px;

  h1 {
    display: inline-block;

    margin: 48px auto;

    font-size: 3.6rem;
    text-align: center;
    position: relative;

    &::after {
      content: '';
      position: absolute;

      height: 2px;
      width: calc(100% + 20px);
      transform: translateX(-50%);

      left: 50%;
      bottom: 0;

      background: ${({ theme }) => theme.colors.active};
      border-radius: 1px;
    }
  }

  h2 {
    font-size: 2.4rem;
    margin: 64px 0 16px;
  }

  p {
    font-size: 1.6rem;
  }

  p + p {
    margin-top: 32px;
  }

  li {
    display: flex;
    align-items: center;
  }

  li + li {
    margin-top: 56px;
  }

  li:nth-child(odd) {
    img {
      margin-right: 48px;
    }
  }

  li:nth-child(even) {
    flex-direction: row-reverse;
    text-align: right;

    img {
      margin-left: 48px;
    }
  }

  @media (max-width: ${media.tablet}) {
    padding-top: 32px;
  }

  @media (max-width: ${media.bigPhone}) {
    padding: 32px 24px 80px;
  }
`;
