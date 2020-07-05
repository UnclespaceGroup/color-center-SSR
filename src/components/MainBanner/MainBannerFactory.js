import React from 'react'
import Bg from 'components/Bg/Bg'
import im from 'static/kuhni-pod-zakaz78.jpg'
import Padding from 'components/Padding/Padding'
import Button from 'components/Button/Button'
import { scrollWindowTo } from 'utils/scrollWindowTo'
import { ANCHOR_FORM } from 'constants/ANCHORS'
import SocialIcons from 'components/SocialIcons/SocialIcons'

const MainBannerFactory = (css) => {
  const MainBanner = () => (
    <Bg img={im}>
      <div className={css.container}>
        <div className={css.wrapper}>
          <div className={css.content}>
            <h1 className={css.title}>Центр цвета - Сыктывкар</h1>
            <h2 className={css.subtitle}>Производство и продажа крашенных МДФ фасадов собственного производства</h2>
            <Padding value={20} />
            <Button className={css.btn} classname={'inline'} onClick={() => { scrollWindowTo(ANCHOR_FORM) }}>Заказать</Button>
          </div>
        </div>
        <div className={css.social}><SocialIcons /></div>
      </div>
    </Bg>
  )
  return React.memo(MainBanner)
}
export default MainBannerFactory
