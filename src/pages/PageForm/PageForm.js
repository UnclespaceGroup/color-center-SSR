import React from 'react'
import TableFormContainer from 'containers/TableFormContainer/TableFormContainer'
import { ANCHOR_FORM } from 'constants/ANCHORS'

const PageFormDesktop = () => {
  return (
    <>
      <TableFormContainer isDesktop id={ANCHOR_FORM} />
    </>
  )
}
export default React.memo(PageFormDesktop)
