// @flow
import React from 'react';
import styled from 'styled-components';

import type { ContextRouter } from 'react-router-dom';

import Header from '../components/Header';
import frameSrc from '../assets/frame.png';
import MainWrapper from '../components/MainWrapper';

import * as constants from '../constants';

export default (props: ContextRouter) => (
  <React.Fragment>
    <Header route={constants.LANDING_ROUTE} />

    <MainWrapper>
      <Frame>
        English / Fran&ccedil;ais
      </Frame>
    </MainWrapper>
  </React.Fragment>
);

const Frame = styled.div`
  background: transparent center center no-repeat url('${frameSrc}');
  background-size: contain;
  width: 80vw;
  height: 65vw;
  margin: 0px auto;
`;
