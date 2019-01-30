// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import namesSrc from '../assets/JandF.png';
import dateSrc from '../assets/date.png';
import lineSrc from '../assets/line.png';

import * as constants from '../constants';
import type { RouteType } from '../constants';

type Props = {
  route: RouteType,
}

export default ({ route }: Props) => {
  return (
    <Wrapper>
      <MenuLink current={route === constants.INVITATION_ROUTE ? true : undefined} to={constants.INVITATION_ROUTE}>
        Invitation
      </MenuLink>

      <MenuLink current={route === constants.CITY_ROUTE ? true : undefined} to={constants.CITY_ROUTE}>
        Montreal
      </MenuLink>

      <JayneFrankWrapper>
        <Image height="50px" image={namesSrc} />
        <Image height="20px" image={dateSrc} />
        <Image height="2px" image={lineSrc} />
      </JayneFrankWrapper>

      <MenuLink current={route === constants.PHOTOS_ROUTE ? true : undefined} to={constants.PHOTOS_ROUTE}>
        Photos
      </MenuLink>

      <MenuLink current={route === constants.FACTS_ROUTE ? true : undefined} to={constants.FACTS_ROUTE}>
        Fun Facts
      </MenuLink>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  background-color: white;
  box-sizing: border-box;
  margin: 0px auto;
  padding: 1vw;
  width: 100%;
  max-width: 1100px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const MenuLink = styled(Link)`
  color: ${props => (props.current ? constants.ACTIVE_COLOUR : constants.ANCHOR_COLOUR)};
  padding: 1vw 2vw;
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
  margin: 0.5vw auto;
  width: 100%;
`;
