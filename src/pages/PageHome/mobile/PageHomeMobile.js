import React from 'react'
import css from './pageHomeMobile.module.scss'
import MainBannerMobile from '../../../components/MainBanner/MainBannerMobile'
import Padding from '../../../components/Padding/Padding'
import AdvantagesMobile from '../../../components/Advantages/AdvantagesMobile'

const PageHomeMobile = () => (
  <div className={css.container}>
    <MainBannerMobile />
    <Padding value={60} />
    <AdvantagesMobile />
    <Padding value={60} />
  </div>
)

export default React.memo(PageHomeMobile)
