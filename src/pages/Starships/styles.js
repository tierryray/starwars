import styled from 'styled-components';

export const ShipsWrapper = styled.div`
  position: relative;
  margin-top: 40px;

  .arrow {
    position: absolute;
    top: -55px;
    left: 0;
    color: #0b0a0d;
  }
`;

export const StarshipsContainer = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const R2D2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-weight: bold;
    font-size: 18px;
    margin-top: 15px;
    color: #a9a9a9;
    text-align: center;
  }
`;
