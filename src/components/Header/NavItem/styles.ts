import styled, { css } from 'styled-components';

interface Props {
  selected?: boolean;
}

export const Container = styled.li<Props>`
  cursor: pointer;

  user-select: none;
  transition: all 0.2s ease;

  a {
    display: block;
    padding: 16px 32px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.active};

    a {
      color: ${({ theme }) => theme.colors.background};
    }
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: ${({ theme }) => theme.colors.active};

      a {
        color: ${({ theme }) => theme.colors.background};
      }
    `}
`;
