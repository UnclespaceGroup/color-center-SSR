import React from 'react'
import PropTypes from 'prop-types'
import css from './Banner.module.scss'
import Layout from '../Layout/Layout'

const Banner = ({ title, text, icon, bgColor, ...other }) => (
  <div className={css.container} {...other} style={{ background: bgColor }}>
    <Layout className={css.wrapper}>
      { icon && <div className={css.icon} style={{ backgroundImage: `url(${icon})` }} />}
      <div className={css.title}>{title}</div>
      <div className={css.text} >{text}</div>
    </Layout>
  </div>
)
Banner.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.node,
  title: PropTypes.node,
  bgColor: PropTypes.string
}

export default React.memo(Banner)
