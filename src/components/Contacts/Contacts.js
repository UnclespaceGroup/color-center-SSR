import React from 'react'
import css from './Contacts.module.scss'
import { YMaps, Map, GeolocationControl, RouteButton, Placemark } from 'react-yandex-maps'
import Layout from '../Layout/Layout'
import Padding from '../Padding/Padding'
import _ from 'lodash'
import { MdPlace, MdPhone, MdAccessTime } from 'react-icons/md'

const mapProps = {
  width: '50%',
  height: '50rem',
  options: { },
  state: {
    center: [61.680429561768634, 50.800528999999926],
    zoom: 18
  }
}

export const contacts = [
  {
    title: 'г.Сыктывкар, Индустриальная, 1/18',
    icon: <MdPlace />
  },
  {
    title: '<p>569-884</p><p>89048686163</p>',
    icon: <MdPhone />
  },
  {
    title: 'Пн-Вс: 10:00 - 19:00',
    icon: <MdAccessTime />
  }
]

const Contacts = ({ id }) => (
  <Layout className={css.container} id={id}>
    <YMaps>
      <Map {...mapProps} >
        <GeolocationControl options={{ float: 'left' }} />
        <RouteButton options={{ float: 'right' }} />
        <Placemark options={{ preset: 'islands#violetRepairShopCircleIcon' }} geometry={[61.680429561768634, 50.800528999999926]} />
      </Map>
    </YMaps>
    <div className={css.wrapper} >
      <h3>Контактная информация</h3>
      <Padding value={32} />
      {
        _.map(contacts, (contact, key) => (
          <div key={key} className={css.item}>
            <div className={css.item__icon}>{contact.icon}</div>
            <div className={css.item__title} dangerouslySetInnerHTML={{ __html: contact.title }} />
          </div>
        ))
      }
    </div>
  </Layout>
)

export default React.memo(Contacts)
