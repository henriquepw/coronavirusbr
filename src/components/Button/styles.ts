import styled, { css } from 'styled-components';

interface Props {
  secondary?: boolean;
}

export const Container = styled.a<Props>`
  color: ${({ theme }) => theme.colors.background};
  background-color: ${({ theme }) => theme.colors.active};

  display: inline-block;
  line-height: 56px;
  height: 56px;

  font-size: 1.8rem;
  border-radius: 28px;
  padding: 0 48px;
  transition: all 0.2s ease;
  backface-visibility: hidden;

  ${({ secondary }) =>
    !secondary &&
    css`
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);

      &:hover {
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.35);
      }

      &:active {
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
      }
    `}

  &:hover {
    background-color: ${({ theme }) => theme.colors.activeDark};
  }

  ${({ secondary, theme }) =>
    secondary &&
    css`
      color: ${theme.colors.primaryText};
      background-color: ${theme.colors.background};
      border: ${theme.colors.active} solid 2px;

      &:hover {
        background-color: ${theme.colors.active};
        color: ${theme.colors.background};
      }
    `}

  &:active {
    transform: scale(0.98) translateY(0);
  }
`;
