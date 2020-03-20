import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  div:first-of-type {
    width: 100%;
    height: 100%;

    max-width: 315px;
    max-height: 321px;
  }

  div:nth-of-type(2) {
    margin-left: 48px;

    h1 {
      font-size: 2.4rem;
      max-width: 658px;
    }

    p {
      font-size: 1.8rem;
      max-width: 800px;
      margin: 16px 0 64px;
    }
  }
`;
