/**
 * Displays the invitation details.
 *
 * @flow
 */
import * as React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import GuestAttendance from './GuestAttendance';
import Card, {
  CardColumn,
  CardTitle as Title,
  CardSubTitle as SubTitle,
  CardText as Text,
} from '../components/Card';

import type { InvitationType } from '../constants';

type Props = {
  invite: InvitationType,
}

export default ({ invite }: Props) => {
  const { t } = useTranslation();

  return (
    <Details>
      <CardWrapper>
        <Card>
          <CardColumn>
            <Title>{t('invitation.ceremony')}</Title>

            <Text textAlign="center">
              {t('invitation.ceremonyDate').toUpperCase()}
            </Text>

            <Text textAlign="center">
              {t('invitation.ceremonyCocktail').toUpperCase()}
            </Text>

            <br />
            <Text textAlign="center">18H00 - 20H00</Text>
            <Text textAlign="center">{t('invitation.ceremonyDoorsOpenAt')}</Text>

            <br />
            <Text textAlign="center">12099 Camille-Tessier</Text>
            <Text textAlign="center">Montreal, QC H1E 6A2</Text>

            <Rsvp />

            {invite.guests.map(({ name, isAttendingCeremony }) => (
              <GuestAttendance name={name} isAttending={isAttendingCeremony} />
            ))}
          </CardColumn>
        </Card>
      </CardWrapper>

      {invite.hasReceptionInvite && (
        <CardWrapper>
          <Card>
            <CardColumn>
              <Title>{t('invitation.reception')}</Title>

              <Text textAlign="center">
                {t('invitation.receptionDate').toUpperCase()}
              </Text>

              <Text textAlign="center">
                {t('invitation.dayParty').toUpperCase()}
              </Text>

              <br />
              <Text textAlign="center">13H00 - 19H00</Text>
              <Text textAlign="center">{t('invitation.receptionDoorsOpenAt')}</Text>

              <br />
              <Text textAlign="center">La Scena - Quai Jacques-Cartier</Text>
              <Text textAlign="center">Montreal, QC H2Y 4B2</Text>

              <Rsvp />

              {invite.guests.map(({ name, isAttendingCeremony }) => (
                <GuestAttendance name={name} isAttending={isAttendingCeremony} />
              ))}
            </CardColumn>
          </Card>
        </CardWrapper>
      )}
    </Details>
  );
};

// Supporting components
const Details = styled.div`
  display: flex;
  align-items: top;
  flex-wrap: wrap;
`;

const CardWrapper = styled.div`
  flex-grow: 1;
  margin: 0 auto 30px auto;
  min-width: 480px;
  max-width: 480px;
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
