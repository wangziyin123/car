import React, { Component } from 'react'
import styles from '../routes/IndexPage.css';


class banner extends Component {
  render() {
    return (
      <div className={styles.banner}>
          <img src='/public/banner.jpg' alt='' />
      </div>
    )
  }
}


export default banner
