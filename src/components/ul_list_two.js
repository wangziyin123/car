import React, { Component } from 'react'
import styles from '../routes/IndexPage.css';

class schedule extends Component {

  render() {
    return (
        <div className={styles.ul_list_two}>
            <ol>
              <li>
                <p>优惠</p>
                <p>登陆后查看优惠券<span>></span></p>
              </li>
          </ol>
        </div>
    )
  }
}

export default schedule
