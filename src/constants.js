/**
 * General constants.
 *
 * @flow
 */

// API
export const API_HOST = process.env.REACT_APP_API_HOST;

// Colours
export const ACTIVE_COLOUR = '#d6ae71';
export const TEXT_COLOUR = '#0b1f03';
export const TRANSITION_TIME = '300ms';

// Device widths
export const DEVICE_WIDTH_PHONE = '580px';
export const DEVICE_WIDTH_TABLET = '770px';
export const DEVICE_WIDTH_DESKTOP = '1000px';

// Invitations
export type InvitationGuestType = {
  name: string,
  email: string,
  address: string,
  isAttendingCeremony: string,
  isAttendingReception: string,
}

export type InvitationType = {
  code: string,
  hasCeremonyInvitation: bool,
  hasReceptionInvitation: bool,
  guests: InvitationGuestType[],
}

// Routes
export const CITY_ROUTE = '/city';
export const FACTS_ROUTE = '/facts';
export const INVITATION_ROUTE = '/invitation';
export const LANDING_ROUTE = '/';
export const TIPS_ROUTE = '/tips';

export const ROUTES = [
  CITY_ROUTE,
  FACTS_ROUTE,
  INVITATION_ROUTE,
  LANDING_ROUTE,
  TIPS_ROUTE,
];

export type RouteType =
  typeof CITY_ROUTE |
  typeof FACTS_ROUTE |
  typeof INVITATION_ROUTE |
  typeof LANDING_ROUTE |
  typeof TIPS_ROUTE;

// Translations
export const LANG_EN = 'en';
export const LANG_FR = 'fr';
export type LanguageType = LANG_EN | LANG_FR;
export const SUPPORTED_LANGUAGES: Map<LanguageType, string> = new Map([
  [LANG_FR, 'Français'],
  [LANG_EN, 'English'],
]);
