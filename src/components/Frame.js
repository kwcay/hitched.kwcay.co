// @flow
import * as React from 'react';
import styled from 'styled-components';

import framePhoneSrc from '../assets/frame.phone.png';
import frameTabletSrc from '../assets/frame.tablet.png';
import frameDesktopSrc from '../assets/frame.desktop.png';

import * as constants from '../constants';

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
    <FrameDiv>
      <Contents>
        {this.props.children}
      </Contents>
    </FrameDiv>
  )
}

const FrameDiv = styled.div`
  background: transparent center center no-repeat url('${framePhoneSrc}');
  background-size: contain;
  padding-top: 64%; // Maintains the aspect ratio of the frame.
  position: relative;
  width: 100%;

  @media (min-width: ${constants.DEVICE_WIDTH_TABLET}) {
    background-image: url('${frameTabletSrc}');
  }

  @media (min-width: ${constants.DEVICE_WIDTH_DESKTOP}) {
    background-image: url('${frameDesktopSrc}');
  }
`;

const Contents = styled.div`
  position: absolute;
  top: 7%;
  left: 5%;
  bottom: 7%;
  right: 5%;
`;
