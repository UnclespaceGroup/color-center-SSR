import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {
  PAGE_FORM,
  PAGE_HOME, PAGE_PRICE
} from 'constants/ROUTES'
import PageHomeDesktop from 'pages/PageHome/PageHomeDesktop'
import PageFormDesktop from 'pages/PageForm/PageFormDesktop'
import PagePriceDesktop from 'pages/PagePrice/PagePriceDesktop'

const RoutesDesktop = () => (
  <Switch>
    <Route component={PageHomeDesktop}
      exact
      path={PAGE_HOME}
    />
    <Route exact path={PAGE_FORM} component={PageFormDesktop} />
    <Route exact path={PAGE_PRICE} component={PagePriceDesktop} />
  </Switch>
)

export default RoutesDesktop
