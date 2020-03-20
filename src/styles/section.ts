import styled from 'styled-components';

import media from './media';

export default styled.section`
  padding: 0 32px;

  @media (max-width: ${media.bigPhone}) {
    padding: 0 24px;
  }
`;
