import React from 'react'
import { Route, Switch } from 'react-router'
import PageHomeMobile from 'pages/PageHome/PageHomeMobile'
import { PAGE_HOME } from '../constants/ROUTES'

const RoutesMobile = () => (
  <Switch>
    <Route component={PageHomeMobile}
      exact
      path={PAGE_HOME}
    />
  </Switch>
)

export default RoutesMobile
