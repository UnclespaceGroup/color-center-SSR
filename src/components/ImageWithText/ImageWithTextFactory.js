import React from 'react'
import cn from 'classnames'

const ImageWithTextFactory = (css) => {
  const ImageWithText = ({ title, text, img, reverse }) => (
    <div className={cn(css.container, reverse && css.reverse)}>
      <div className={css.content}>
        <h2 className={css.title}>{title}</h2>
        <p className={css.text}>{text}</p>
      </div>
      <div className={css.img}>
        <img src={img} alt='' />
      </div>
    </div>
  )
  return React.memo(ImageWithText)
}
export default ImageWithTextFactory
