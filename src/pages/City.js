// @flow
import React from 'react';
import { useTranslation } from 'react-i18next';

import * as constants from '../constants';
import Header from '../components/Header';
import MainWrapper from '../components/MainWrapper';
import Card, {
  CardColumn,
  CardTitle as Title,
  CardSubTitle as SubTitle,
  CardText as Text,
} from '../components/Card';

import type { ContextRouter } from 'react-router-dom';

export default (props: ContextRouter) => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Header route={constants.CITY_ROUTE} />

      <MainWrapper
        title="city.title"
        messageLine1="city.messageLine1"
        messageLine2="city.messageLine2"
      >
        <Card>
          <CardColumn>
            <Title>{t('city.whereToStay')}</Title>
            <SubTitle>Hotel Royal Versailles</SubTitle>
            <SubTitle>Best Western Hotel Europa</SubTitle>
            <SubTitle>Airbnb</SubTitle>

            <Title>{t('city.whereToEat')}</Title>

            <SubTitle>Fourchette Antillaise</SubTitle>
            <Text>{t('city.fourchetteAntillaiseDesc')}</Text>

            <SubTitle>Le Nil Bleu</SubTitle>
            <Text>{t('city.nilBleuDesc')}</Text>

            <SubTitle>Agrikol</SubTitle>
            <Text>{t('city.agrikolDesc')}</Text>
          </CardColumn>

          <CardColumn>
            <Title>{t('city.whatToDo')}</Title>

            <SubTitle>{t('city.oldPort')}</SubTitle>
            <Text>{t('city.oldPortDesc')}</Text>

            <SubTitle>{t('city.mountRoyal')}</SubTitle>
            <Text>{t('city.mountRoyalDesc')}</Text>

            <SubTitle>{t('city.botanicalGarden')}</SubTitle>
            <Text>{t('city.botanicalGardenDesc')}</Text>

            <Title>Uber</Title>
            <Text>
              {t('city.uberDescLine1')}
              <br />
              <br />

              {t('city.uberDescLine2')}
            </Text>
          </CardColumn>
        </Card>
      </MainWrapper>
    </React.Fragment>
  );
}
