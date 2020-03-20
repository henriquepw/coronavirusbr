import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    color: ${({ theme }) => theme.colors.active};
    font-size: 3.6rem;
    margin: 5px 0;
    display: inline-block;
    line-height: 3.6rem;
  }

  hr {
    display: inline-block;
    width: 50px;
    margin: 0 30px;

    border-top: none;
    border-left: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.active};
    border-radius: 1px;

    transform: translate(0, -10px);
  }

  h6 {
    color: ${({ theme }) => theme.colors.primaryText};
    opacity: 0.6;
    font-size: 1.6rem;
    font-weight: normal;
  }
`;
