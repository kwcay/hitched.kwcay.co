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
            <SubTitle>
              <a href={t('city.royalVersaillesUrl')} target="_blank" rel="noopener noreferrer">
                Hotel Royal Versailles
              </a>
            </SubTitle>

            <SubTitle>
              <a href={t('city.hotelEuropaUrl')} target="_blank" rel="noopener noreferrer">
                Best Western Hotel Europa
              </a>
            </SubTitle>
            <SubTitle>
              <a href={t('city.airbnbUrl')} target="_blank" rel="noopener noreferrer">
                Airbnb
              </a>
            </SubTitle>

            <Title>{t('city.whereToEat')}</Title>

            <SubTitle>
              <a href={t('city.fourchetteAntillaiseUrl')} target="_blank" rel="noopener noreferrer">
                Fourchette Antillaise
              </a>
            </SubTitle>
            <Text>{t('city.fourchetteAntillaiseDesc')}</Text>

            <SubTitle>
              <a href={t('city.nilBleuUrl')} target="_blank" rel="noopener noreferrer">
                Le Nil Bleu
              </a>
            </SubTitle>
            <Text>{t('city.nilBleuDesc')}</Text>

            <SubTitle>
              <a href={t('city.agrikolUrl')} target="_blank" rel="noopener noreferrer">
                Agrikol
              </a>
            </SubTitle>
            <Text>{t('city.agrikolDesc')}</Text>
          </CardColumn>

          <CardColumn>
            <Title>{t('city.whatToDo')}</Title>

            <SubTitle>
              <a href={t('city.oldPortUrl')} target="_blank" rel="noopener noreferrer">
                {t('city.oldPort')}
              </a>
            </SubTitle>
            <Text>{t('city.oldPortDesc')}</Text>

            <SubTitle>
              <a href={t('city.mountRoyalUrl')} target="_blank" rel="noopener noreferrer">
                {t('city.mountRoyal')}
              </a>
            </SubTitle>
            <Text>{t('city.mountRoyalDesc')}</Text>

            <SubTitle>
              <a href={t('city.botanicalGardenUrl')} target="_blank" rel="noopener noreferrer">
                {t('city.botanicalGarden')}
              </a>
            </SubTitle>
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
