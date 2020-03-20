import styled from 'styled-components';

export const Container = styled.header`
  z-index: 10;
  position: fixed;

  width: 100%;
  max-width: 1536px;
  background-color: ${({ theme }) => theme.colors.background};

  ul {
    display: flex;
    align-items: center;
  }
`;
