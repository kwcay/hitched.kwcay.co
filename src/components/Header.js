// @flow
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import JayneFrank from './JayneFrank';
import lineSrc from '../assets/line.png';
import * as constants from '../constants';
import type { RouteType } from '../constants';

type Props = {
  route: RouteType,
}

export default ({ route }: Props) => {
  const linkProps = {};
  const { t } = useTranslation();

  for (const linkRoute of constants.ROUTES) {
    linkProps[linkRoute] = {
      route: linkRoute,
      current: route === linkRoute,
    }
  }

  return (
    <Wrapper>
      <Link {...linkProps[constants.INVITATION_ROUTE]}>
        {t('invitation.title')}
      </Link>

      <Link {...linkProps[constants.CITY_ROUTE]}>
        {t('city.title')}
      </Link>

      <JayneFrank />

      <Link {...linkProps[constants.PHOTOS_ROUTE]}>
        {t('notes.title')}
      </Link>

      <Link {...linkProps[constants.FACTS_ROUTE]}>
        {t('facts.title')}
      </Link>

      <MobileMenu />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  background-color: white;
  box-sizing: border-box;
  margin: 0px auto;
  padding: 2.5vw;
  width: 100%;
  min-height: 9rem;
  max-width: 1200px;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (min-width: ${constants.DEVICE_WIDTH_TABLET}) {
    justify-content: space-between;
    padding: 1vw;
  }
`;

const Link = ({ children, current, route }) => {
  return current
    ? <ActiveLink to={route}>{children}</ActiveLink>
    : <InactiveLink to={route}>{children}</InactiveLink>;
};

const InactiveLink = styled(RouterLink)`
  color: ${constants.TEXT_COLOUR};
  display: none;
  padding: 1vw 2vw;
  text-align: center;
  text-transform: uppercase;
  width: 10rem;

  @media (min-width: ${constants.DEVICE_WIDTH_TABLET}) {
    display: inline-block;
  }
`;

const ActiveLink = styled(InactiveLink)`
  color: ${constants.ACTIVE_COLOUR};
`;

// Hamburger menu for mobile
const MobileMenu = () => (
  <MobileMenuBtnWrapper>
    <MobileMenuCheckbox />

    <MobileMenuBar className="menu-bar" />
    <MobileMenuBar className="menu-bar" />
    <MobileMenuBar className="menu-bar" />
  </MobileMenuBtnWrapper>
);

const MENU_BUTTON_WIDTH = 30;

const MobileMenuBtnWrapper = styled.div`
  width: ${MENU_BUTTON_WIDTH}px;
  position: absolute;
  top: 40px;
  right: 5vw;

  @media (min-width: ${constants.DEVICE_WIDTH_TABLET}) {
    display: none;
  }
`;

const MobileMenuCheckbox = styled.input`
  display: block;
  width: ${MENU_BUTTON_WIDTH}px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;

  cursor: pointer;

  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the menu */
  -webkit-touch-callout: none;

  // Turn hamburger menu into a cross
  &:checked ~ .menu-bar {
    opacity: 1;
    transform: rotate(45deg) translate(${MENU_BUTTON_WIDTH / 10}px, -${MENU_BUTTON_WIDTH / 10}px);
    background-color: $accent-color;
  }

  &:checked ~ .menu-bar:nth-last-child(2) {
    transform: rotate(-45deg) translate(0px, ${MENU_BUTTON_WIDTH / 4});
  }

  // Hide the middle line when expanding the menu.
  &:checked ~ .menu-bar:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  // Slide in menu
  &:checked ~ ul {
    transform: none;
  }
`;

const MobileMenuBar = styled.span`
  background: ${constants.ACTIVE_COLOUR} center center no-repeat url('${lineSrc}');
  background-size: cover;
  border-radius: 3px;

  display: block;
  width: ${MENU_BUTTON_WIDTH}px;
  height: ${MENU_BUTTON_WIDTH / 10}px;
  margin: ${MENU_BUTTON_WIDTH / 10}px auto;
  position: relative;
  z-index: 1;

  transform-origin: $menu-button-width/10 0px;
  transition: transform $transition-time cubic-bezier(0.77,0.2,0.05,1.0),
              background-color $transition-time cubic-bezier(0.77,0.2,0.05,1.0),
              opacity $transition-time ease;

  // &:hover {
  //   background-color: $accent-color;
  // }

  &:first-child {
    transform-origin: 0% 0%;
  }

  &:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
`;
