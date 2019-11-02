import React, { useMemo } from 'react'
import { compose } from 'redux'
import { hot } from 'react-hot-loader'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet/lib/Helmet'
import MobileView from './LoadableMobileView'
import DesktopView from './LoadableDesktopView'
import { withViewContext } from 'HOC/ViewContext'
import { YMInitializer } from 'react-yandex-metrika'
import ReactGA from 'react-ga'
import { withRouter } from 'react-router'

const ViewSwitcher = ({ location, sizes: { isDesktop, isMobile } }) => {
  useMemo(() => {
    ReactGA.initialize('UA-100727616-5')
    ReactGA.pageview(location.pathname + location.search)
  }, [isDesktop, isMobile])
  return (
    <>
      <Helmet>
        <html
          className={`elastic-${
            isMobile ? 'mobile' : isDesktop ? 'desktop' : 'tablet'
          }`}
        />
      </Helmet>
      <YMInitializer accounts={[56016901]} />
      {isMobile ? <MobileView /> : <DesktopView />}
    </>
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
