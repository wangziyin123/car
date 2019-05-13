import React, { Component } from 'react'
import styles from '../routes/IndexPage.css';
import { Picker, List } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'
import { district } from 'antd-mobile-demo-data';

const colors = [
  {
    label:
    (<div style={{color:'#000',fontSize:'14px'}}>
      <p>换驾照</p>
    </div>),
    value: '#FF0000',
  },
  {
    label:
    (<div style={{color:'#000',fontSize:'14px'}}>
      <p>补驾照</p>
    </div>),
    value: '#00FF00',
  },
];

const CustomChildren = props => (
  <div
    onClick={props.onClick}
    style={{ backgroundColor: '#fff', }}
  >
    <div className="test" style={{ display: 'flex',}}>
      <div style={{color: '#000' }}>{props.children}</div>
      <div style={{ textAlign: 'right', color: '#ccc' }}>{props.extra}</div>
    </div>
  </div>
);




class ul_list_one extends Component {
  state = {
    colorValue: ['#FF0000'],
    pickerValue1: [],
    pickerValue2: []
  };
  render() {
    return (
      <div className={styles.ul_list_one}>
          <ul>
              <li>
                <p>服务类型</p>
              <Picker
                data={colors}
                value={this.state.colorValue}
                cols={1}
                onChange={this.onChangeColor}
              >
                <List.Item arrow="horizontal"></List.Item>
              </Picker>
              </li>
              <li>
                <Picker
                  title="选择地区"
                  extra="请选择补还地"
                  data={district}
                  cols={2}
                  value={this.state.pickerValue1}
                  onChange={v => this.setState({ pickerValue1: v })}
                  onOk={v => this.setState({ pickerValue1: v })}
                >
                  <CustomChildren><p>当前驾照签发城市</p></CustomChildren>
                </Picker>
              </li>
              <li>
                {/* <p>可补换的签发城市</p>
                <p>请选择补还地</p> */}
                <Picker
                  title="选择地区"
                  extra="请选择补还地"
                  data={district}
                  cols={2}
                  value={this.state.pickerValue2}
                  onChange={h => this.setState({ pickerValue2: h})}
                  onOk={h => this.setState({ pickerValue2: h })}
                >
                  <CustomChildren><p>可补换的签发城市</p></CustomChildren>
                </Picker>
              </li>
              <li>
                <p>服务费</p>
                <p>￥<span>399</span></p>
              </li>
          </ul>

         
      </div>
    )
  }
  onChangeColor = (color) => {
    this.setState({
      colorValue: color,
    });
  };
}

export default ul_list_one
