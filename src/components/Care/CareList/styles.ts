import styled from 'styled-components';

import media from '~/styles/media';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 89px 1fr;
  grid-template-rows: auto-fill;
  row-gap: 64px;
  margin: 88px 28px;
  height: auto;

  &:nth-child(odd) {
    grid-column: 1;
    grid-row: auto;
  }

  &:nth-child(even) {
    grid-column: 3;
    grid-row: auto;
  }

  @media (max-width: ${media.smallDesktop}) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    margin: 72px auto;

    & > div {
      margin-bottom: 64px;
    }
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 280px;
`;

export const VerticalDivider = styled.div`
  grid-column: 2;
  grid-row: 1 / 4;
  border-left: 2px solid ${({ theme }) => theme.colors.active};
  border-right: 2px solid ${({ theme }) => theme.colors.active};

  border-radius: 2px;

  height: 100%;
  width: 1px;
  margin: 0 auto;
  /* transform: translate(0, -12%); */

  @media (max-width: ${media.smallDesktop}) {
    display: none;
  }
`;
