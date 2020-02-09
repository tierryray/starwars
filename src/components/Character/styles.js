import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { lighten } from 'polished';

export const FrontCard = styled.div`
  height: 420px;
  background: url(${props => props.background}) top center no-repeat;
  background-size: cover;
  color: #fff;
  border-radius: 8px;
  box-shadow: 5px 20px 50px #000000;
  cursor: pointer;

  div {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    background: ${props => lighten(0.07, props.theme.colors.black)};
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
  height: 420px;
  background-color: ${props => lighten(0.07, props.theme.colors.black)};
  color: #fff;
  border-radius: 8px;
  box-shadow: 5px 20px 50px #000000;
  padding: 10px 20px;
  cursor: pointer;
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
    border: 1px solid ${props => props.theme.colors.yellow};
    box-shadow: 0px 0px 15px ${props => props.theme.colors.yellow};
  }
`;

export const Bio = styled.div`
  width: 100%;
  margin-top: 65px;

  .name {
    h2 {
      text-align: center;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 30px 0px;
    text-align: center;

    span {
      align-self: center;

      span {
        margin-right: 10px;
      }
      p {
        color: #fff;
      }
    }

    .gender,
    .birth {
      margin-bottom: 10px;
    }

    span {
      display: flex;
      align-items: center;
      font-weight: bold;
      color: ${props => props.theme.colors.yellow};

      svg {
        margin-right: 5px;
      }
    }
  }

  .body {
    color: ${props => props.theme.colors.yellow};

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

export const StyledLink = styled(Link)`
  position: absolute;
  bottom: 20px;
  right: 10px;
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.yellow};
  opacity: 1;
  transition: opacity 0.2s ease-out;

  &:hover {
    opacity: 0.7;
  }

  small {
    text-align: center;
    margin-right: 5px;
  }
`;
