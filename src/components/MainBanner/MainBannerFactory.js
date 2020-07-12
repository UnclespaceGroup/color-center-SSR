import React from 'react'
import Bg from 'components/Bg/Bg'
import Padding from 'components/Padding/Padding'
import Button from 'components/Button/Button'
import { scrollWindowTo } from 'utils/scrollWindowTo'
import { ANCHOR_HOW_ORDER } from 'constants/ANCHORS'
import SocialIcons from 'components/SocialIcons/SocialIcons'

const MainBannerFactory = (css) => {
  const MainBanner = ({ title, subtitle, bgImg }) => (
    <Bg img={bgImg}>
      <div className={css.container}>
        <div className={css.wrapper}>
          <div className={css.content}>
            <h1 className={css.title}>{title}</h1>
            <h2 className={css.subtitle}>{subtitle}</h2>
            <Padding value={20} />
            <Button className={css.btn} classname={'inline'} onClick={() => { scrollWindowTo(ANCHOR_HOW_ORDER) }}>Заказать</Button>
          </div>
        </div>
        <div className={css.social}><SocialIcons /></div>
      </div>
    </Bg>
  )
  return React.memo(MainBanner)
}
export default MainBannerFactory
