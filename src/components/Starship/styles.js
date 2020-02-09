import styled from 'styled-components';
import { lighten } from 'polished';

export const FrontCard = styled.div`
  height: 300px;
  background-color: ${props => lighten(0.07, props.theme.colors.black)};
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
    background-color: ${props => lighten(0.07, props.theme.colors.black)};
    padding: 15px;
    border-radius: 5px;

    span {
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      max-width: 150px;
    }

    span:last-child {
      display: flex;
      font-size: 14px;
      justify-content: flex-end;
      align-items: center;
      color: ${props => props.theme.colors.yellow};

      svg {
        margin-right: 5px;
      }
    }
  }
`;

export const BackCard = styled.div`
  min-height: 300px;
  background-color: ${props => lighten(0.07, props.theme.colors.black)};
  color: #fff;
  border-radius: 8px;
  box-shadow: 5px 20px 50px #000000;
  padding: 10px 20px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    min-height: 300px;
  }

  h2 {
    text-align: center;
    color: ${props => props.theme.colors.yellow};
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
        color: ${props => props.theme.colors.yellow};
        margin-right: 5px;
      }
    }
  }
`;
