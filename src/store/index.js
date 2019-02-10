/**
 * Manages storage for the application.
 *
 * @flow
 */
import type { InvitationType, LanguageType } from './constants';

// Storage keys.
const INVITATION_KEY = 'invite';
const LANGUAGE_KEY = 'lang';

class Store {
  /**
   * Deserializes an object from the store.
   */
  getObject = (key: string, defaultObject?: Object): ?Object => {
    const obj = localStorage.getItem(key);

    return obj ? JSON.parse(obj) : defaultObject;
  }

  /**
   * Serializes an object to the store.
   */
  setObject = (key: string, obj: Object) => localStorage.setItem(key, JSON.stringify(obj))

  /**
   * Retrieves invitation details from local storage if it exists.
   */
  getInvitation = (): ?InvitationType => this.getObject(INVITATION_KEY)

  /**
   * Stores the invitation details to local storage.
   */
  setInvitation = (invite: InvitationType) => localStorage.setItem(INVITATION_KEY, invite)

  /**
   * Retrieves the user-defined language.
   */
  getLanguage = (): ?LanguageType => localStorage.getItem(LANGUAGE_KEY)

  /**
   * Stores the user-defined language.
   */
  setLanguage = (language: LanguageType) => localStorage.setItem(LANGUAGE_KEY, language)
}

export default new Store();
