// @flow
import * as React from 'react';
import styled from 'styled-components';

import namesSrc from '../assets/JandF.png';
import dateSrc from '../assets/date.png';
import lineSrc from '../assets/line.png';

export default () => (
  <Wrapper>
    <Image height="50px" image={namesSrc} />
    <Image height="20px" image={dateSrc} />
    <Line src={lineSrc} />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
`;

const Image = styled.div`
  background: transparent center center no-repeat url('${props => props.image}');
  background-size: contain;
  height: ${props => props.height};
  margin: 0.5vw auto;
  width: 100%;
`;

const Line = styled.img`
  height: 1px;
  width: 10%;
  margin: 0.5vw auto;
`;
