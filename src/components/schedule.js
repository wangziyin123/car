import React, { Component } from 'react'
import styles from '../routes/IndexPage.css';

class schedule extends Component {
  state = {
      list:['订单提交','填写收货地址','正在办理','办理完成'],
    }
  render() {
    return (
        <div className={styles.schedule}>
          <ul className={styles.uls}>
              {
                this.state.list.map((item,index)=>{
                  return <li key={index}className={index===0?styles.active:styles.lis}>{item}</li>
                })
              }
            </ul>
      </div>
    )
  }
}

export default schedule
