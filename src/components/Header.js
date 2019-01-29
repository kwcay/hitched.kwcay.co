// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import namesSrc from '../assets/JandF.png';
import dateSrc from '../assets/date.png';
import lineSrc from '../assets/line.png';

import type { PageType } from '../constants';

type Props = {
  page: PageType,
}

export default (props: Props) => {
  return (
    <Wrapper>
      <MenuLink to="/invitation">Invitation</MenuLink>
      <MenuLink to="/city">Montreal</MenuLink>

      <JayneFrankWrapper>
        <Image height="50px" image={namesSrc} />
        <Image height="20px" image={dateSrc} />
        <Image height="2px" image={lineSrc} />
      </JayneFrankWrapper>

      <MenuLink to="/photos">Photos</MenuLink>
      <MenuLink to="/facts">Fun Facts</MenuLink>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  background-color: white;
  padding: 2vw;

  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

const MenuLink = styled(Link)`
  text-transform: uppercase;
`;

// Jayne & Frank
const JayneFrankWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
`;

const Image = styled.div`
  background: transparent center center no-repeat url('${props => props.image}');
  background-size: contain;
  height: ${props => props.height};
  margin: 10px auto;
  width: 100%;
`;
