import React from 'react'
import PropTypes from 'prop-types'
import css from './BannerMobile.module.scss'
import LayoutMobile from '../Layout/LayoutMobile'

const BannerMobile = ({ title, text, icon, bgColor }) => (
  <div className={css.container} style={{ background: bgColor }}>
    <LayoutMobile className={css.wrapper}>
      { icon && <div className={css.icon} style={{ backgroundImage: `url(${icon})` }} />}
      <div className={css.title}>{title}</div>
      <div className={css.text}>{text}</div>
    </LayoutMobile>
  </div>
)
BannerMobile.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.node,
  title: PropTypes.node,
  bgColor: PropTypes.string
}

export default React.memo(BannerMobile)
