import Bg from 'components/Bg/Bg'
import React from 'react'

const BannerFactory = (css) => {
  const Banner = ({ title, text, icon, bgColor, bgImg, className, ...other }) => (
    <Bg img={bgImg} className={className}>
      <div className={css.container} {...other} style={{ background: bgColor }}>
        <div className={css.wrapper}>
          { icon && <div className={css.icon} style={{ backgroundImage: `url(${icon})` }} />}
          <div className={css.title}>{title}</div>
          <div className={css.text} dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </div>
    </Bg>
  )
  return React.memo(Banner)
}
export default BannerFactory
