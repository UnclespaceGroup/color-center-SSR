import React from 'react'
import TableFormContainer from 'containers/TableFormContainer/TableFormContainer'
import { ANCHOR_FORM } from 'constants/ANCHORS'

const PageFormMobile = () => {
  return (
    <>
      <TableFormContainer isDesktop={false} id={ANCHOR_FORM} />
    </>
  )
}
export default React.memo(PageFormMobile)
