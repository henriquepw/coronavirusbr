import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;

  width: 100%;
  max-width: 1536px;
  background-color: ${({ theme }) => theme.colors.background};

  ul {
    display: flex;
    align-items: center;

    li {
      font-size: 1.8rem;
      padding: 16px 32px;

      transition: all 0.2s ease;
    }

    li {
      &:hover {
        background-color: ${({ theme }) => theme.colors.active};

        a {
          color: ${({ theme }) => theme.colors.background};
        }
      }
    }
  }
`;
