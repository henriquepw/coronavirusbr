import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
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
