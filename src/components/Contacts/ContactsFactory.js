import React from 'react'
import Padding from 'components/Padding/Padding'
import _ from 'lodash'
import { FaVk } from 'react-icons/fa'
import { MAIN_PHONE_LONG } from 'constants/USER_DATA'
import { MdPhone, MdPlace } from 'react-icons/md'

export const contacts = [
  {
    title: 'Группа ВКонтакте',
    text: '<a href="https://vk.com/centrcveta" target="_blank">https://vk.com/centrcveta</a>',
    icon: <FaVk />
  },
  {
    title: `По номеру телефона`,
    text: `<b>${MAIN_PHONE_LONG}</b>`,
    icon: <MdPhone />
  },
  {
    title: 'Придите к нам лично',
    text: 'г.Сыктывкар, Индустриальная, 1/17',
    icon: <MdPlace />
  }
]

const ContactsFactory = (css) => {
  const Contacts = ({ id }) => (
    <div className={css.container} id={id}>
      <div className={css.wrapper} >
        <h3 className={css.title}>Для заказа свяжитесь с нами</h3>
        <Padding value={32} />
        {
          _.map(contacts, (contact, key) => (
            <div key={key} className={css.item}>
              <div>
                <div className={css.item__icon}>{contact.icon}</div>
              </div>
              <div>
                <div className={css.item__title} dangerouslySetInnerHTML={{ __html: contact.title }} />
                <div className={css.item__text} dangerouslySetInnerHTML={{ __html: contact.text }} />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
  return React.memo(Contacts)
}
export default ContactsFactory
