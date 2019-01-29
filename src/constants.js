/**
 * @flow
 *
 *
 */

// Page constants
export const INVITATION_PAGE = 'invitation-page';
export const CITY_PAGE = 'city-page';
export const PHOTO_PAGE = 'photo-pages';
export const FACTS_PAGE = 'facts-page';

export type PageType =
  typeof INVITATION_PAGE |
  typeof CITY_PAGE |
  typeof PHOTO_PAGE |
  typeof FACTS_PAGE;
