/**
 * Displays the invitation details.
 *
 * @flow
 */
import * as React from 'react';
import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';
import * as constants from '../constants';
import GuestAttendance from './GuestAttendance';
import Card, {
  CardTitle as Title,
  CardText as Text,
} from '../components/Card';

import type { InvitationType } from '../constants';

type Props = {
  canRespond: boolean,
  invite: InvitationType,
  onAcceptCeremony: (firstName: string, lastName: string) => void,
  onAcceptReception: (firstName: string, lastName: string) => void,
  onDeclineCeremony: (firstName: string, lastName: string) => void,
  onDeclineReception: (firstName: string, lastName: string) => void,
}

export default (props: Props) => {
  const { t } = useTranslation();

  return (
    <Details narrow={!props.invite.hasReceptionInvite}>
      <CardWrapper>
        <Card>
          <Title>{t('invitation.ceremony')}</Title>

          <Text textAlign="center">
            {t('invitation.ceremonyDate').toUpperCase()}
          </Text>

          <Text textAlign="center">
            {t('invitation.ceremonyCocktail').toUpperCase()}
          </Text>

          <br />
          <Text textAlign="center">12H30 - 14H30</Text>
          <Text textAlign="center">{t('invitation.ceremonyDoorsOpenAt')}</Text>

          <br />
          <Text textAlign="center">
              <a
                href="https://goo.gl/maps/BVuDFn9cD2n49NrKA"
                target="_blank"
                rel="noopener noreferrer"
              >
                &Eacute;glise Sheba, 2555 rue Holt
              </a>
          </Text>
          <Text textAlign="center">
            <a
              href="https://goo.gl/maps/BVuDFn9cD2n49NrKA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Montr&eacute;al, QC H1Y 1N4
            </a>
          </Text>

          <Rsvp />

          {props.invite.guests.map(({ firstName, lastName, isAttendingCeremony }) => (
            <GuestAttendance
              key={`${firstName}-${lastName}`}
              firstName={firstName}
              lastName={lastName}
              isAttending={isAttendingCeremony}
              onAcceptInvitation={props.onAcceptCeremony}
              onDeclineInvitation={props.onDeclineCeremony}
              canRespond={props.canRespond}
            />
          ))}
        </Card>
      </CardWrapper>

      {props.invite.hasReceptionInvite && (
        <CardWrapper>
          <Card>
            <Title>{t('invitation.reception')}</Title>

            <Text textAlign="center">
              {t('invitation.receptionDate').toUpperCase()}
            </Text>

            <Text textAlign="center">
              {t('invitation.dayParty').toUpperCase()}
            </Text>

            <br />
            <Text textAlign="center">14H00 - 20H00</Text>
            <Text textAlign="center">{t('invitation.receptionDoorsOpenAt')}</Text>

            <br />
            <Text textAlign="center">
              <a
                href="https://goo.gl/maps/XuA9nAbvRNq3bknV9"
                target="_blank"
                rel="noopener noreferrer"
              >
                La Scena - Quai Jacques-Cartier
              </a>
            </Text>
            <Text textAlign="center">
              <a
                href="https://goo.gl/maps/XuA9nAbvRNq3bknV9"
                target="_blank"
                rel="noopener noreferrer"
              >
                Montr&eacute;al, QC H2Y 4B2
              </a>
            </Text>

            <Rsvp />

            {props.invite.guests.map(({ firstName, lastName, isAttendingReception }) => (
              <GuestAttendance
                key={`${firstName}-${lastName}`}
                firstName={firstName}
                lastName={lastName}
                isAttending={isAttendingReception}
                onAcceptInvitation={props.onAcceptReception}
                onDeclineInvitation={props.onDeclineReception}
                canRespond={props.canRespond}
              />
            ))}
          </Card>
        </CardWrapper>
      )}
    </Details>
  );
};

// Supporting components
const Details = styled.div`
  border-spacing: 0;
  display: table;
  margin: auto;
  width: 100%;
  text-align: center;

  @media (min-width: ${constants.DEVICE_WIDTH_DESKTOP}) {
    border-spacing: 2rem 0;
    // display: table-cell;
  }

  ${props => props.narrow && css`
    max-width: 545px;
  `}
`;

const CardWrapper = styled.div`
  display: block;
  margin: 0 auto 30px auto;
  max-width: 480px;
  vertical-align: top;

  @media (min-width: ${constants.DEVICE_WIDTH_DESKTOP}) {
    display: table-cell;
  }
`;

const RsvpText = styled.div`
  text-align: left;
  text-decoration: underline;
  margin-top: 10px;
`;

const Rsvp = () => (
  <RsvpText>
    RSVP
  </RsvpText>
);
