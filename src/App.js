import React, { useMemo } from 'react'
import { compose } from 'redux'
import { hot } from 'react-hot-loader'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet/lib/Helmet'
import MobileView from 'App/AppMobile'
import DesktopView from './App/AppDesktop'
import { withViewContext } from 'HOC/ViewContext'
import { YMInitializer } from 'react-yandex-metrika'
import ReactGA from 'react-ga'
import { withRouter } from 'react-router'
import ScrollToTop from 'HOC/ScrollToTop'

const ViewSwitcher = ({ location, sizes: { isDesktop, isMobile } }) => {
  useMemo(() => {
    ReactGA.initialize('UA-100727616-5')
    ReactGA.pageview(location.pathname + location.search)
  }, [isDesktop, isMobile])
  return (
    <ScrollToTop>
      <Helmet>
        <html
          className={`elastic-${
            isMobile ? 'mobile' : isDesktop ? 'desktop' : 'tablet'
          }`}
        />
      </Helmet>
      <YMInitializer accounts={[56016901]} />
      {isMobile ? <MobileView /> : <DesktopView />}
    </ScrollToTop>
  )
}

ViewSwitcher.propTypes = {
  sizes: PropTypes.object
}

export default compose(
  withRouter,
  withViewContext,
  hot(module)
)(ViewSwitcher)
