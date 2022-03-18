import styled, { keyframes } from "styled-components";

const moveUp = keyframes`
 0% {
    background-position: -1px -1px, -1px -1px;
  }
  100% {
    background-position: -50px -50px, -1px -1px;
  }`;

const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  margin: 0 auto;
  perspective: 180px;
  perspective-origin: 50% 40%;
`;

const Landscape = styled.div`
   {
    position: absolute;
    width: 200%;
    left: -50%;
    height: 130%;
    bottom: -30%;
    background-image: -webkit-linear-gradient(top, #cf33d9 2px, transparent 2px),
      -webkit-linear-gradient(left, #cf33d9 2px, transparent 2px);
    background-size: 50px 50px, 80px 80px;
    background-position: -1px -1px, -1px -1px;
    transform: rotateX(85deg);
    animation: ${moveUp} 1s infinite linear;
  }
`;

export { HeroWrapper, InnerWrapper, Landscape };
