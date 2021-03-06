import React from 'react';
import styled, { keyframes } from 'styled-components';
import './Loader.scss';
const bouncedelay = keyframes`
  0%,
  80%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  40% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
`;

const commonStyle = {
  margin: 'auto',
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};

const sizeItem = {
  small: '12px',
  default: '14px',
  large: '16px'
}

const LoadContainer = styled.div`
  position: absolute;
  width:60px;
  height: 60px;
`;

const container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const circle = styled.div`
  width: ${props => sizeItem[props.size] || sizeItem['default'] };
  height: ${props => sizeItem[props.size] || sizeItem['default'] };
  background-color: ${props => props.color || '#2452FB'} ;
  border-radius: 100%;
  position: absolute;
  animation: ${bouncedelay} ${props => props.speed || 1.2}s infinite ease-in-out;
  animation-fill-mode: both;
`;

const ContainerFirst = styled(container)``;

const ContainerTwo = styled(container)`
  transform: rotateZ(45deg);
`;

const ContainerThree = styled(container)`
  transform: rotateZ(90deg);
`;

const CircleFirst = styled(circle)`
  top: 0;
  left: 0;
`;

const CircleTwo = styled(circle)`
  animation-delay: -0.9s;
  top: 0;
  right: 0;
`;

const CircleThree = styled(circle)`
  animation-delay: -0.6s;
  right: 0;
  bottom: 0;
`;

const CircleFour = styled(circle)`
  animation-delay: -0.3s;
  left: 0;
  bottom: 0;
`;

const CircleFirst1 = styled(circle)`
  top: 0;
  left: 0;
  animation-delay: -1.1s;
`;

const CircleTwo1 = styled(circle)`
  animation-delay: -0.8s;
  top: 0;
  right: 0;
`;

const CircleThree1 = styled(circle)`
  animation-delay: -0.5s;
  right: 0;
  bottom: 0;
`;

const CircleFour1 = styled(circle)`
  animation-delay: -0.2s;
  left: 0;
  bottom: 0;
`;

const CircleFirst2 = styled(circle)`
  top: 0;
  left: 0;
  animation-delay: -1s;
`;

const CircleTwo2 = styled(circle)`
  animation-delay: -0.7s;
  top: 0;
  right: 0;
`;

const CircleThree2 = styled(circle)`
  animation-delay: -0.4s;
  right: 0;
  bottom: 0;
`;

const CircleFour2 = styled(circle)`
  animation-delay: -0.1s;
  left: 0;
  bottom: 0;
`;
const Loading = ({ style = commonStyle, color, size="default", speed }) => {
  return (
    <LoadContainer style={style}>
    <ContainerFirst>
      <CircleFirst color={color} size={size} speed={speed} />
      <CircleTwo color={color} size={size}  speed={speed}  />
      <CircleThree color={color} size={size}  speed={speed}  />
      <CircleFour color={color} size={size}  speed={speed}  />
    </ContainerFirst>
    <ContainerTwo>
      <CircleFirst1 color={color} size={size}  speed={speed}  />
      <CircleTwo1 color={color} size={size}  speed={speed}  />
      <CircleThree1 color={color} size={size}  speed={speed}  />
      <CircleFour1 color={color} size={size}  speed={speed}  />
    </ContainerTwo>
    <ContainerThree>
      <CircleFirst2 color={color} size={size}  speed={speed}  />
      <CircleTwo2 color={color} size={size}  speed={speed}  />
      <CircleThree2 color={color} size={size}  speed={speed}  />
      <CircleFour2 color={color} size={size}  speed={speed}  />
    </ContainerThree>
  </LoadContainer>
  );
};

export default Loading;
