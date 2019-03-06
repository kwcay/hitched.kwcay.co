// @flow
import * as React from 'react';
import styled from 'styled-components';

import framePhoneSrc from '../assets/frame.phone.png';
import frameTabletSrc from '../assets/frame.tablet.png';
import frameDesktopSrc from '../assets/frame.desktop.png';

import * as constants from '../constants';

type Props = {
  display?: string,
  width?: number,
  widthUnit?: string,
  children: React$Node,
}

const Frame = ({ children, width, widthUnit }: Props) => (
  <FrameDiv width={width} widthUnit={widthUnit}>
    <Contents>
      {children}
    </Contents>
  </FrameDiv>
);

Frame.defaultProps = {
  width: 80,
  widthUnit: 'vw',
  children: null,
};

const FrameDiv = styled.div`
  background: transparent center center no-repeat url('${framePhoneSrc}');
  background-size: contain;
  // margin-top: 20%;
  padding-top: 64%; // Maintains the aspect ratio of the frame.
  position: relative;
  width: 100%;

  transform: rotate(90deg);

  @media (min-width: ${constants.DEVICE_WIDTH_TABLET}) {
    background-image: url('${frameTabletSrc}');
    margin-top: 0;
    transform: rotate(0deg);
  }

  @media (min-width: ${constants.DEVICE_WIDTH_DESKTOP}) {
    background-image: url('${frameDesktopSrc}');
  }
`;

const Contents = styled.div`
  position: absolute;
  top: -20%;
  left: 20%;
  bottom: -20%;
  right: 20%;

  transform: rotate(-90deg);

  @media (min-width: ${constants.DEVICE_WIDTH_TABLET}) {
    top: 7%;
    left: 5%;
    bottom: 7%;
    right: 5%;
    transform: rotate(0deg);
  }
`;

export default Frame;
