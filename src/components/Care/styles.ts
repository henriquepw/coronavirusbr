import styled from 'styled-components';

import media from '~/styles/media';
import section from '~/styles/section';

export const Container = styled(section)`
  height: 100vh;
  padding: 40px auto;
  padding-top: 104px;

  @media (max-width: ${media.tablet}) {
    height: auto;
  }
`;
