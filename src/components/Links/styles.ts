import styled from 'styled-components';

import section from '~/styles/section';

export const Container = styled(section)`
  img {
    max-height: 321px;
  }

  ul {
    margin: 88px 0;

    li + li {
      margin-top: 64px;
    }
  }
`;
