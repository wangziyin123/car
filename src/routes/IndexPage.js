import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Schedule from '../components/schedule'
import Banners from '../components/banners'
import Uploading from '../components/uploading'
import Ullistone from '../components/ul_list_one'
import Ullisttwo from '../components/ul_list_two'

function IndexPage() {
  return (
    <div className={styles.normal}>
        {/* <header>
          <h3>补换驾照</h3>
        </header> */}
        <section>
          <Schedule/>
          <Banners/>
          <Uploading/>
          <Ullistone/>
          <Ullisttwo/>
          <div className={styles.issue}>
            <a href="">常见问题?</a>
          </div>
        </section>
        <div className={styles.footer_box}>
            <div className={styles.footer_left}>
              实付:<p>￥<span>399</span></p>
            </div>
            <div className={styles.footerright}>
                立即支付
            </div>
        </div>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
