import styled from 'styled-components';

import section from '~/styles/section';

export const Container = styled(section)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 0;

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
