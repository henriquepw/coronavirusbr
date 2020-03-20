import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  padding: 40px 0;

  .care-list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 280px;
  }

  .care-list-container {
    display: grid;
    grid-template-columns: 1fr 1rem 1fr;
    width: 1052;
    max-width: 1052;
    margin: 88px 118px;
  }

  .vertical-divider {
    grid-column: 2;

    border-left: 0.2rem solid ${({ theme }) => theme.colors.active};
    border-right: 0.2rem solid ${({ theme }) => theme.colors.active};

    border-radius: 0.2rem;

    height: 376px;
    width: 0.4rem;
    transform: translate(0, -12%);
  }
`;
