import React from 'react'
import { Route, Switch } from 'react-router'
import PageHomeMobile from 'pages/PageHome/PageHomeMobile'
import { PAGE_HOME, PAGE_PRICE } from 'constants/ROUTES'
import PagePriceMobile from 'pages/PagePrice/PagePriceMobile'

const RoutesMobile = () => (
  <Switch>
    <Route component={PageHomeMobile} exact path={PAGE_HOME} />
    <Route component={PagePriceMobile} exact path={PAGE_PRICE} />
  </Switch>
)

export default RoutesMobile
