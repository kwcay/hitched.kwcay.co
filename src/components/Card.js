// @flow
import * as React from 'react';
import styled from 'styled-components';

import lineSrc from '../assets/line.png';
import * as constants from '../constants';
import texturePhoneSrc from '../assets/texture.phone.png';
import textureTabletSrc from '../assets/texture.tablet.png';
import textureDesktopSrc from '../assets/texture.desktop.png';

type Props = {
  children: React$Node,
}

export default ({ children }: Props) => (
  <Texture>
    <Contents>
      {children}
    </Contents>
  </Texture>
)

const Texture = styled.div`
  background: ${constants.ACTIVE_COLOUR} center center no-repeat url('${texturePhoneSrc}');
  background-size: cover;
  box-sizing: border-box;
  padding: 5px;
  position: relative;
  width: 100%;

  @media (min-width: ${constants.DEVICE_WIDTH_TABLET}) {
    background-image: url('${textureTabletSrc}');
  }

  @media (min-width: ${constants.DEVICE_WIDTH_DESKTOP}) {
    background-image: url('${textureDesktopSrc}');
  }
`;

const Contents = styled.div`
  background-color: #fAfAf4;
  box-sizing: border-box;
  text-align: center;

  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  @media (min-width: ${constants.DEVICE_WIDTH_TABLET}) {
    flex-direction: row;
  }

  @media (min-width: ${constants.DEVICE_WIDTH_DESKTOP}) {
    padding: 30px;
  }
`;

export const CardColumn = styled.div`
  flex-grow: 1;
  padding: 5%;
  position: relative;
  width: 90%;

  @media (min-width: ${constants.DEVICE_WIDTH_TABLET}) {
    padding: 3%;
    width: 44%;

    & ~ & {
      &:before {
        background: ${constants.ACTIVE_COLOUR} center center no-repeat url('${lineSrc}');
        content: " ";
        display: block;
        height: 1px;
        width: 90%;

        position: absolute;
        top: 55%;
        left: -45%;
        transform: rotate(90deg);
      }
    }
  }
`;

export const CardTitle = ({ children }) => (
  <TitleWrapper>
    <Title>
      {children}
    </Title>

    <TitleLine src={lineSrc} />
  </TitleWrapper>
);

const TitleWrapper = styled.div`
  margin: 20px auto;
`;

const Title = styled.h2`
  margin: 0px;
  text-transform: uppercase;
`;

const TitleLine = styled.img`
  height: 1px;
  width: 10%;
`;

export const CardSubTitle = styled.span`
  display: block;
  margin: 10px auto;
  text-align: left;
  text-transform: uppercase;

  @media (min-width: ${constants.DEVICE_WIDTH_TABLET}) {
    margin: 20px auto;
  }
`;

export const CardText = styled.p`
  margin: 0px;
  text-align: left;
`;
