import styled from 'styled-components';

export const SquareAnimation = styled.div`
  width: 100px;
  height: 90px;
  opacity: 0.5;
  position: absolute;
  opacity: 0.5;
  top: 60px;
  left: 800px;
  animation: square 10s ease-in-out alternate infinite;
  @keyframes square {
    to {
      transform: translate(70vw, 100vh);
    }
  }
  &:before,
  &:after {
    position: absolute;
    content: '';
    left: 50px;
    top: 0;
    width: 50px;
    height: 80px;
    background: #a64ac9;
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }

  &:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`;
export const SquareAAnimation = styled.div`
  width: 100px;
  height: 90px;
  opacity: 0.5;
  position: absolute;
  opacity: 0.8;
  top: 300px;
  left: 100px;
  animation: square 10s linear alternate infinite;
  @keyframes square {
    to {
      transform: translate(100vw, 80vh);
    }
  }
  &:before,
  &:after {
    position: absolute;
    content: '';
    left: 50px;
    top: 0;
    width: 50px;
    height: 80px;
    background: #fccd04;
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }

  &:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`;

export const CircleAnimation = styled.div`
  width: 100px;
  height: 90px;
  opacity: 0.8;
  position: absolute;
  opacity: 0.8;
  top: 200px;
  left: -100px;
  animation: rect 10s ease-in-out alternate infinite;
  @keyframes rect {
    to {
      transform: translate(100vw, 100vh);
    }

    &:before,
    &:after {
      position: absolute;
      content: '';
      left: 50px;
      top: 0;
      width: 50px;
      height: 80px;
      background: #ffb48f;
      border-radius: 50px 50px 0 0;
      transform: rotate(-45deg);
      transform-origin: 0 100%;
    }

    &:after {
      left: 0;
      transform: rotate(45deg);
      transform-origin: 100% 100%;
    }
  }
`;

export const RectAnimation = styled.div`
  width: 100px;
  height: 90px;
  opacity: 0.8;
  position: absolute;
  opacity: 0.8;
  top: 400px;
  left: -50px;
  animation: rect 10s ease-in-out alternate infinite;
  @keyframes rect {
    to {
      transform: translate(80vw, 100vh);
    }

    &:before,
    &:after {
      position: absolute;
      content: '';
      left: 50px;
      top: 0;
      width: 50px;
      height: 80px;
      background: #f5e6cc;
      border-radius: 50px 50px 0 0;
      transform: rotate(-45deg);
      transform-origin: 0 100%;
    }

    &:after {
      left: 0;
      transform: rotate(45deg);
      transform-origin: 100% 100%;
    }
  }
`;

export const HeartAnimation = styled.div`
  width: 100px;
  height: 90px;
  opacity: 0.8;
  position: absolute;
  top: 100px;
  right: 100px;

  animation: rect 10s linear alternate infinite;
  @keyframes rect {
    to {
      transform: translate(-100vw, 50vh);
    }
  }

  &:before,
  &:after {
    position: absolute;
    content: '';
    left: 50px;
    top: 0;
    width: 50px;
    height: 80px;
    background: #17e9e0;
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }

  &:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`;

export const HeartAAnimation = styled.div`
  width: 100px;
  height: 90px;
  opacity: 0.8;
  position: absolute;
  left: -50%;
  ${'' /* bottom: 40%; */}
  right: 100px;

  animation: rect 10s linear alternate infinite;
  @keyframes rect {
    to {
      transform: translate(-80vw, -10vh);
    }
  }

  &:before,
  &:after {
    position: absolute;
    content: '';
    left: 50px;
    top: 0;
    width: 50px;
    height: 80px;
    background: #a64ac9;
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }

  &:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`;

export const HeartAAAnimation = styled.div`
  width: 100px;
  height: 90px;
  opacity: 0.8;
  position: absolute;
  top: 30%;
  left: -30%;

  animation: rect 10s linear alternate infinite;
  @keyframes rect {
    to {
      transform: translate(90vw, -90vh);
    }
  }

  &:before,
  &:after {
    position: absolute;
    content: '';
    left: 50px;
    top: 0;
    width: 50px;
    height: 80px;
    background: #fccd04;
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }

  &:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`;
export const HeartAAwAnimation = styled.div`
  width: 100px;
  height: 90px;
  opacity: 0.8;
  position: absolute;
  top: 30%;
  left: -80%;
  animation: rect 10s ease-in-out alternate infinite;
  @keyframes rect {
    to {
      transform: translate(90vw, -100vh);
    }
  }

  &:before,
  &:after {
    position: absolute;
    content: '';
    left: 50px;
    top: 0;
    width: 50px;
    height: 80px;
    background: #61892f;
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }

  &:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`;

export const HeartAAAAnimation = styled.div`
  width: 100px;
  height: 90px;
  opacity: 0.8;
  position: absolute;
  top: 0%;
  left: 70%;
  animation: rect 10s ease-in alternate infinite;
  @keyframes rect {
    to {
      transform: translate(100vw, 40vh);
    }
  }

  &:before,
  &:after {
    position: absolute;
    content: '';
    left: 50px;
    top: 0;
    width: 50px;
    height: 80px;
    background: #5a5560;
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }

  &:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`;
