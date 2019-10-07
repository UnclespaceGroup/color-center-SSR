import React from 'react'
import css from './SocialIcons.module.scss'
import { MAIN_PHONE_LONG, VK_LINK } from '../../constants/USER_DATA'
import { FaVk, FaWhatsapp, FaPhone } from 'react-icons/fa'

const SocialIcons = () => (
  <div className={css.socials}>
    <a href={VK_LINK} ><FaVk size={'3rem'} /></a>
    <a href={`tel:${MAIN_PHONE_LONG}`} ><FaWhatsapp size={'3rem'} /></a>
    <a href={`tel:${MAIN_PHONE_LONG}`} ><FaPhone size={'2.5rem'} /></a>
  </div>
)

export default React.memo(SocialIcons)
