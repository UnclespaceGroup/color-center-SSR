import React from 'react'
import s from './pageHomeDesktop.module.scss'
import MainBanner from '../../../components/MainBanner/MainBanner'
import Advantages from '../../../components/Advantages/Advantages'
import Padding from '../../../components/Padding/Padding'
import UsingMDF from '../../../components/UsingMDF/UsingMDF'

const PageHomeDesktop = () => (
  <div className={s.container}>
    <MainBanner />
    <Padding value={120} />
    <Advantages />
    <Padding value={160} />
    <UsingMDF />
    <Padding value={120} />
  </div>
)

export default React.memo(PageHomeDesktop)
