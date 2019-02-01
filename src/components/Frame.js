// @flow
import * as React from 'react';
import styled from 'styled-components';

import frameSrc from '../assets/frame.png';

type Props = {
  width: number,
  widthUnit: string,
  children: React$Node,
}

export default class Frame extends React.Component<Props> {
  static defaultProps = {
    width: 80,
    widthUnit: 'vw',
    children: null,
  }

  render = () => (
    <Wrapper width={this.props.width} units={this.props.widthUnit}>
      {this.props.children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: transparent center center no-repeat url('${frameSrc}');
  background-size: contain;
  box-sizing: border-box;
  width: ${props => `${props.width}${props.units}`};
  height: ${props => `${props.width*0.75}${props.units}`};
  margin: 0px auto;
  padding: 10% 5%;
`;
