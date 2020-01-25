import styled from 'styled-components';
import { lighten } from 'polished';

export const FrontCard = styled.div`
  height: 350px;
  background-color: ${lighten(0.07, '#0B0A0D')};
  background: url(${props => props.background}) top center no-repeat;
  background-size: cover;
  color: #fff;
  border-radius: 8px;
  transition: all 0.2s ease 0s;
  box-shadow: 5px 20px 50px #000000;

  div {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
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
      font-size: 11px;
    }
  }
`;

export const BackCard = styled.div`
  height: 350px;
  background-color: ${lighten(0.07, '#0B0A0D')};
  color: #fff;
  border-radius: 8px;
  box-shadow: 5px 20px 50px #000000;
`;

export const PicWrapper = styled.div`
  display: flex;
  justify-content: center;

  .picture {
    position: absolute;
    top: -30px;
    width: 85px;
    height: 85px;
    background: url(${props => props.picture}) top center no-repeat;
    background-size: cover;
    border-radius: 50%;
    border: 1px solid #ffe300;
    box-shadow: 0px 0px 15px #ffe300;
  }
`;

export const Bio = styled.div`
  width: 100%;
  margin-top: 65px;
  padding: 0 15px;

  .name {
    h2 {
      text-align: center;
    }
  }

  .info {
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;
    text-align: center;

    .gender,
    .birth {
      border-right: 1px solid yellow;
      padding-right: 5px;
    }

    span {
      display: flex;
      align-items: center;
      font-weight: bold;
      color: #ffe300;
      margin-bottom: 3px;

      svg {
        margin-right: 5px;
      }
    }
  }

  .body {
    color: #ffe300;

    h3 {
      margin-bottom: 10px;
    }

    .height,
    .mass {
      display: flex;
      flex-direction: column;

      span {
        margin-bottom: 10px;
      }

      progress {
        width: 100%;
        -webkit-appearance: none;
        appearance: none;
      }

      progress[value]::-webkit-progress-value {
        background-color: yellow;
        border-radius: 10px;
      }

      progress[value]::-webkit-progress-bar {
        border-radius: 10px;
        height: 8px;
      }
    }

    .height {
      margin-bottom: 5px;
    }
  }
`;
