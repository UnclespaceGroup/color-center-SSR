import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {
  PAGE_FORM,
  PAGE_HOME
} from 'constants/ROUTES'
import PageHomeDesktop from 'pages/PageHome/PageHomeDesktop'
import PageFormDesktop from 'pages/PageForm/PageForm'

const RoutesDesktop = () => (
  <Switch>
    <Route component={PageHomeDesktop}
      exact
      path={PAGE_HOME}
    />
    <Route exact path={PAGE_FORM} component={PageFormDesktop} />
  </Switch>
)

export default RoutesDesktop
