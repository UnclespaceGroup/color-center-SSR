import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { compose } from 'redux'
import { hot } from 'react-hot-loader'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet/lib/Helmet'
import MobileView from './LoadableMobileView'
import DesktopView from './LoadableDesktopView'
import TabletView from './LoadableTabletView'
import { withViewContext } from 'HOC/ViewContext'
import { setIsDesktop } from '../actions/isDesktopAction'

const ViewSwitcher = ({ sizes: { isDesktop, isMobile } }) => {
  const dispatch = useDispatch()
  useMemo(() => {
    dispatch(setIsDesktop(!!isDesktop))
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
      {isMobile ? <MobileView /> : isDesktop ? <DesktopView /> : <TabletView />}
    </>
  )
}

ViewSwitcher.propTypes = {
  sizes: PropTypes.object
}

export default compose(
  withViewContext,
  hot(module)
)(ViewSwitcher)
