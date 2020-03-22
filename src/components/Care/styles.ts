import styled from 'styled-components';

import media from '~/styles/media';
import section from '~/styles/section';

export const Container = styled(section)`
  min-height: 100vh;
  padding-top: 104px !important;
  padding-bottom: 80px;

  background-color: ${({ theme }) => theme.colors.secundaryBackground};

  @media (max-width: ${media.smallDesktop}) {
    height: auto;
  }

  @media (max-width: ${media.bigPhone}) {
    padding-top: 104px;
    padding-bottom: 8px;
  }
`;
