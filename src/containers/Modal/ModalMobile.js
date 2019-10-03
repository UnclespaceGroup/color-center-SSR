import React, { useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'
import css from './ModalMobile.module.scss'
import { MdClose } from 'react-icons/md'
import { compose } from 'redux'

const ModalOrder = ({ children, isOpen, closeModal }) => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.getElementsByTagName('body')[0].style.overflowY = 'auto'
    }
    return () => {
      document.getElementsByTagName('body')[0].style.overflowY = 'auto'
    }
  })

  const openModal = (open) => {
    if (typeof document === 'undefined') return
    if (open) {
      document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
    } else {
      document.getElementsByTagName('body')[0].style.overflowY = 'auto'
    }
  }

  useMemo(() => {
    openModal(isOpen)
  }, [isOpen])

  return (
    isOpen
      ? <div className={css.container} >
        <div className={css.wrapper}>
          <div className={css.close} onClick={closeModal}><MdClose /></div>
          {children}
        </div>
      </div>
      : <div />
  )
}
ModalOrder.propTypes = {
  children: PropTypes.node
}

export default compose(
  React.memo
)(ModalOrder)
