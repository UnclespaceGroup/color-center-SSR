import React from 'react'
import css from './SocialIcons.module.scss'
import { MAIN_PHONE_LONG, VK_LINK } from '../../constants/USER_DATA'

const SocialIcons = () => (
  <div className={css.socials}>
    <a href={`tel:${MAIN_PHONE_LONG}`} className={css.viber} />
    <a href={`tel:${MAIN_PHONE_LONG}`} className={css.wa} />
    <a href={VK_LINK} className={css.vk} />
  </div>
)

export default React.memo(SocialIcons)
