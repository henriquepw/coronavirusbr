import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 1.5rem;
    margin: 0 36px;
    max-width: 312px;
  }

  .icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.active};
  }
`;
