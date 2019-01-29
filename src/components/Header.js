// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import type { PageType } from '../constants';

type Props = {
  page: PageType,
}

export default (props: Props) => {
  return (
    <Wrapper>
      {menuLinks.map(menu => (
        <MenuLink key={menu[0]} to={menu[0]}>{menu[1]}</MenuLink>
      ))}
    </Wrapper>
  );
}

const menuLinks = [
  ['/invitation', 'Invitation'],
  ['/city', 'Montreal'],
  ['/photos', 'Photos'],
  ['/facts', 'Fun Facts'],
];

const Wrapper = styled.header`
  background-color: white;
  display: flex;
  justify-content: space-around;
`;

const MenuLink = styled(Link)`
  text-transform: uppercase;
`;
