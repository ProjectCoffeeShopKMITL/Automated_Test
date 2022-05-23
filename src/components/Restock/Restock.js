import styles from './Restock.module.css'

import { useHistory } from 'react-router-dom'

import { Rate } from 'antd'
import { IoCartOutline } from 'react-icons/io5'

export function Restock({ data }) {
  // move to next page
  const history = useHistory()

  return (
    <div
      className={styles.container}
      onClick={() => history.push(`/restock/${data.id}`)}
    >
      <div>
        <img src={data.img} className={styles.img} />
      </div>
      {data.sale_to !== null && <div className={styles.sale}>sale</div>}

      <div className={styles.coverDetail}>
        <div>
          <span className={styles.name}>{data.restock_name}</span>
          <div className={styles.rateCustom}>
            <Rate disabled defaultValue={data.star} className={styles.star} />
          </div>
          <span className={styles.price}>฿ {data.price}</span>
        </div>
        <div className={styles.button}>
          <div className={styles.icon}>
            <IoCartOutline />
          </div>
          <span className={styles.textButton}>ADD TO CART</span>
        </div>
      </div>
    </div>
  )
}
