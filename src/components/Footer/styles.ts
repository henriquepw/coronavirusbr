import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 1.4rem;

  height: 96px;
  border-top: 1px solid ${({ theme }) => theme.colors.active};

  p,
  a {
    text-align: center;
  }

  a {
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.active};

    &:hover {
      color: ${({ theme }) => theme.colors.activeDark};
    }
  }
`;
