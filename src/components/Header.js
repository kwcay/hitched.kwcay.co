// @flow
import React from 'react';
import styled, { css } from 'styled-components';
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

      <JayneFrankLink to={constants.INVITATION_ROUTE}>
        <JayneFrank />
      </JayneFrankLink>

      <Link {...linkProps[constants.TIPS_ROUTE]}>
        {t('tips.title')}
      </Link>

      <Link {...linkProps[constants.FACTS_ROUTE]}>
        {t('facts.title')}
      </Link>

      <MobileMenu linkProps={linkProps} t={t} />
    </Wrapper>
  );
}

// Supporting components
const { DEVICE_WIDTH_DESKTOP: mobileMenuWidth}  = constants;

const Wrapper = styled.header`
  background-color: white;
  box-sizing: border-box;
  text-align: center;
  z-index: 2;

  display: table-row;
  margin: 0px auto;
  height: 87.5px;
  width: 100%;
  position: fixed;
`;

const Link = ({ children, current, route }) => {
  return current
    ? <ActiveLink to={route}>{children}</ActiveLink>
    : <InactiveLink to={route}>{children}</InactiveLink>;
};

const InactiveLink = styled(RouterLink)`
  color: ${constants.TEXT_COLOUR};
  display: none;
  padding: 25px 0;
  text-align: center;
  text-transform: uppercase;
  min-width: 10rem;

  @media (min-width: ${mobileMenuWidth}) {
    display: inline-block;
  }
`;

const ActiveLink = styled(InactiveLink)`
  color: ${constants.ACTIVE_COLOUR};
`;

const JayneFrankLink = styled(RouterLink)`
  display: inline-block;
  vertical-align: bottom;
`;

// Hamburger menu for mobile
const MobileMenu = ({ linkProps, t }) => (
  <MobileMenuBtnWrapper>
    <MobileMenuCheckbox type="checkbox" />

    <MobileMenuBar />
    <MobileMenuBar />
    <MobileMenuBar />

    <MobileMenuLinks>
      <MobileLink {...linkProps[constants.INVITATION_ROUTE]}>
        {t('invitation.title')}
      </MobileLink>

      <MobileLink {...linkProps[constants.CITY_ROUTE]}>
        {t('city.title')}
      </MobileLink>

      <MobileLink {...linkProps[constants.TIPS_ROUTE]}>
        {t('tips.title')}
      </MobileLink>

      <MobileLink {...linkProps[constants.FACTS_ROUTE]}>
        {t('facts.title')}
      </MobileLink>
    </MobileMenuLinks>
  </MobileMenuBtnWrapper>
);

const MENU_BUTTON_WIDTH = 35;
const MENU_BUTTON_TOP = 30;

const MobileMenuBtnWrapper = styled.div`
  width: ${MENU_BUTTON_WIDTH}px;
  position: absolute;
  top: ${MENU_BUTTON_TOP}px;
  right: 5vw;

  @media (min-width: ${mobileMenuWidth}) {
    display: none;
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
  z-index: 3;

  transform-origin: ${MENU_BUTTON_WIDTH / 10}px 0px;
  transition: transform ${constants.TRANSITION_TIME} cubic-bezier(0.77, 0.2, 0.05, 1.0),
              background-color ${constants.TRANSITION_TIME} cubic-bezier(0.77, 0.2, 0.05, 1.0),
              opacity ${constants.TRANSITION_TIME} ease;

  &:first-child {
    transform-origin: 0% 0%;
  }

  &:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
`;

const MobileMenuCheckbox = styled.input`
  cursor: pointer;
  display: block;
  width: ${MENU_BUTTON_WIDTH}px;
  height: 100%;
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 4;

  -webkit-touch-callout: none;

  // Turn hamburger menu into a cross
  &:checked ~ ${MobileMenuBar} {
    opacity: 1;
    transform: rotate(45deg) translate(0px, 0px);
    background-color: ${constants.ACTIVE_COLOUR};
  }

  &:checked ~ ${MobileMenuBar}:nth-last-child(2) {
    // transform: rotate(-45deg) translate(0px, ${MENU_BUTTON_WIDTH / 4}px);
    transform: rotate(-45deg) translate(-4px, 6px);
  }

  // Hide the middle line when expanding the menu.
  &:checked ~ ${MobileMenuBar}:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
`;

const MobileMenuLinks = styled.div`
  background-color: white;
  box-sizing: border-box;
  list-style: none;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 4vh;

  position: absolute;
  top: -${MENU_BUTTON_TOP}px;
  right: -5vw;
  height: 100vh;
  width: 100vw;
  z-index: 1;

  transform-origin: 0% 0%;
  transform: translate(100%, 0);
  transition: transform ${constants.TRANSITION_TIME} cubic-bezier(0.77, 0.2, 0.05, 1.0);

  // Slide in menu
  input:checked ~ & {
    transform: none;
  }
`;

const MobileLinkWrapper = styled(RouterLink)`
  margin: 1vh auto 1vh auto;
  padding: 1vh 1vw;

  ${props => props.current && css`
    color: ${constants.ACTIVE_COLOUR};
  `}
`;

const MobileLink = ({ children, current, route }) => (
  <MobileLinkWrapper current={current ? 1 : undefined} to={route}>
    {children}
  </MobileLinkWrapper>
);
