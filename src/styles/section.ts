import styled from 'styled-components';

import media from './media';

export default styled.section`
  padding: 0 32px;

  min-height: 100vh;

  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.secundaryBackground};
  }

  @media (max-width: ${media.bigPhone}) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;
