import React, { Component } from 'react'
import styles from '../routes/IndexPage.css';
// import { Button } from 'antd-mobile';

class uploading extends Component {
  state={
    // flag:false
  }
  render() {
    return (
      <div className={styles.uploading}>
            <dl onClick={this.one}>
              <dt>
                <p>
                  <span>+</span>
                </p>
              </dt>
              <dd>身份证正面
                {/* <div className={styles.one}>
                  <div className={styles.one_img}>
                    <img src='' alt='' />
                  </div>
                  <div className={styles.one_buttons}>
                    <Button>拍照</Button>
                    <Button>相册</Button>
                  </div>
                  <div className={styles.one_button}>
                    <Button>取消</Button>
                  </div>
                </div> */}
              </dd>
            </dl>
            <dl>
              <dt>
                <p>
                  <span>+</span>
                </p>
              </dt>
              <dd>身份证反面</dd>
            </dl>
            <dl>
              <dt>
                <p>
                  <span>+</span>
                </p>
              </dt>
              <dd>驾驶证正面</dd>
            </dl>
            <dl>
              <dt>
                <p>
                  <span>+</span>
                </p>
              </dt>
              <dd>驾驶证反面</dd>
            </dl>
            <dl>
              <dt>
                <p>
                  <span>+</span>
                </p>
              </dt>
              <dd>白底半身照</dd>
            </dl>
          </div>
    )
  }
  one(){
    // console.log(1)
  }
}

export default uploading
