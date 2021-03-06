/**
 * @flow
 *
 * Utility functions
 */
import i18next from 'i18next';
import type { InvitationGuestType } from './constants';

export const guestsToString = (guests: InvitationGuestType[]): string => {
  if (!guests || guests.length < 1) {
    return '';
  } else if (guests.length === 1) {
    return guests[0].firstName;
  }

  let guestStr = guests[0].firstName;

  for (let i = 1; i < guests.length - 1; i++) {
    guestStr += `, ${guests[i].firstName}`;
  }

  return `${guestStr} ${i18next.t('general.and')} ${guests[guests.length - 1].firstName}`;
}
