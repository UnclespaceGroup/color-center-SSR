import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import css from './TableOrders.module.scss'
import Layout from '../Layout/Layout'
import { MdClose } from 'react-icons/md'
import {
  FIELD_COLOR_CODE,
  FIELD_COLOR_SHADE,
  FIELD_COUNT,
  FIELD_LENGTH,
  FIELD_THICKNESS,
  FIELD_WIDTH
} from '../../constants/FORM_DATA'
import Button from '../Button/Button'
import Padding from '../Padding/Padding'

const TableOrders = ({ items, deleteItem, onButtonClick }) => (
  <div className={items.length ? css.container : css.container__empty}>
    <Layout >
      <h3>Корзина</h3>
      <table>
        <thead>
          <tr>
            <th>Размер плиты</th>
            <th>Толщина</th>
            <th>Количество</th>
            <th>Цвет</th>
            <th>Примерная стоимость</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {
            _.map(items, (item, key) => (
              <tr key={key}>
                <td>{item[FIELD_LENGTH]} <span>мм</span> x {item[FIELD_WIDTH]} <span>мм</span></td>
                <td>{item[FIELD_THICKNESS]} <span>мм</span></td>
                <td>{item[FIELD_COUNT]}</td>
                <td>{item[FIELD_COLOR_CODE]} / {item[FIELD_COLOR_SHADE]}</td>
                <td>200</td>
                <td><div onClick={() => { deleteItem(key) }}><MdClose /></div></td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <Padding value={24} />
      <Button classname={'purple'} onClick={onButtonClick}>Сделать заказ</Button>
    </Layout>
  </div>
)
TableOrders.propTypes = {
  items: PropTypes.array
}

export default React.memo(TableOrders)
