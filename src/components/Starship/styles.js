import styled from 'styled-components';
import { lighten } from 'polished';

export const ShipsWrapper = styled.div``;

export const FrontCard = styled.div`
  height: 200px;
  background-color: ${lighten(0.07, '#0B0A0D')};
  background: url(${props => props.background}) top center no-repeat;
  background-size: cover;
  color: #fff;
  border-radius: 8px;
  transition: all 0.2s ease 0s;
  box-shadow: 5px 20px 50px #000000;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    height: 300px;
  }

  div {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: ${lighten(0.07, '#0B0A0D')};
    padding: 15px;
    border-radius: 5px;

    span {
      color: #fff;
      font-size: 22px;
      font-weight: bold;
    }

    p {
      color: #ffe300;
      font-size: 12px;
    }
  }
`;

export const BackCard = styled.div`
  min-height: 200px;
  background-color: ${lighten(0.07, '#0B0A0D')};
  color: #fff;
  border-radius: 8px;
  box-shadow: 5px 20px 50px #000000;
  padding: 10px 20px;

  @media screen and (min-width: 768px) {
    min-height: 300px;
  }

  h2 {
    text-align: center;
    color: #ffe300;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 20px;

    div {
      display: flex;
      margin-bottom: 5px;

      span {
        color: #ffe300;
        margin-right: 5px;
      }
    }
  }
`;
