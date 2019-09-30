import React from 'react'
import PropTypes from 'prop-types'

const Padding = ({ value }) => (
  <div style={{ paddingTop: `${value / 10}rem` }} />
)
Padding.propTypes = {
  value: PropTypes.number
}

export default React.memo(Padding)
