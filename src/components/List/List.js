import React from 'react'
import _ from 'lodash'

const List = ({ children, items, itemClassName, className }) => (
  <ul className={className}>
    {_.map(items, (item, key) => (
      <li key={key} className={itemClassName}>
        {React.cloneElement(children, { ...item })}
      </li>
    ))}
  </ul>
)
export default React.memo(List)
