// @flow
import * as React from 'react';
import styled from 'styled-components';

import namesSrc from '../assets/JandF.png';
import dateSrc from '../assets/date.png';
import lineSrc from '../assets/line.png';

type Props = {
  width?: string,
}

const JayneFrank = (props: Props) => (
  <Wrapper width={props.width}>
    <Image height="50px" image={namesSrc} />
    <Image height="20px" image={dateSrc} />
    <Line src={lineSrc} />
  </Wrapper>
);

JayneFrank.defaultProps = {
  width: '100%',
}

// Supporting components.
const Wrapper = styled.div`
  margin: auto;
  max-width: 300px;
  width: ${props => props.width};
`;

const imgMargin = '15px auto';

const Image = styled.div`
  background: transparent center center no-repeat url('${props => props.image}');
  background-size: contain;
  height: ${props => props.height};
  margin: ${imgMargin};
  width: 100%;
`;

const Line = styled.img`
  display: table;
  height: 1px;
  width: 10%;
  margin: ${imgMargin};
`;

export default JayneFrank;
