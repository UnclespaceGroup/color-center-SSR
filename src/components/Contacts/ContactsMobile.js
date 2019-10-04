import React from 'react'
import css from './ContactsMobile.module.scss'
import { YMaps, Map, GeolocationControl, RouteButton, Placemark } from 'react-yandex-maps'
import Layout from '../Layout/LayoutMobile'
import Padding from '../Padding/Padding'
import _ from 'lodash'
import { contacts } from './Contacts'

const mapProps = {
  width: '100%',
  height: '25rem',
  options: { },
  state: {
    center: [61.680429561768634, 50.800528999999926],
    zoom: 18
  }
}

const Contacts = ({ id }) => (
  <div className={css.container} id={id}>
    <Layout className={css.wrapper} >
      <Padding value={32} />
      <h3>Контактная информация</h3>
      <Padding value={32} />
      {
        _.map(contacts, (contact, key) => (
          <div key={key} className={css.item}>
            <div className={css.item__icon}>{contact.icon}</div>
            <div className={css.item__title} >{contact.title}</div>
          </div>
        ))
      }
    </Layout>
    <YMaps>
      <Map {...mapProps} >
        <GeolocationControl options={{ float: 'left' }} />
        <RouteButton options={{ float: 'right' }} />
        <Placemark options={{ preset: 'islands#violetRepairShopCircleIcon' }} geometry={[61.680429561768634, 50.800528999999926]} />
      </Map>
    </YMaps>
  </div>
)

export default React.memo(Contacts)
