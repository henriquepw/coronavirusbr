import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.colors.active};
  }

  p {
    font-size: 3.6rem;
    max-width: 634px;
    margin: 32px 0 96px 0;
  }

  div:nth-of-type(2) {
    height: 100vh;
    width: 40%;

    pointer-events: none;
  }
`;
