import styled from 'styled-components';

interface Props {
  inverted?: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  flex-direction: ${({ inverted }) => (inverted ? 'row-reverse' : 'row')};
  p {
    font-size: 1.5rem;
    margin: 0 36px;
    max-width: 312px;
    text-align: ${({ inverted }) => (inverted ? 'right' : 'left')};
  }

  img {
    width: 60px;
    height: 60px;
  }
`;
