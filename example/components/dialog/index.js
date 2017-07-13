import {Component, h} from 'preact';

import PageFooter from '../_common/page-footer';
import PageHeader from '../_common/page-header';
import {WeuiDialog,WeuiDialogCtrl} from 'src/dialog/index';
import WeuiButton from 'src/button/index';


export default class extends Component{

  state = {
    visible: false
  };

  componentDidMount() {
    WeuiDialogCtrl.createInstance();
  }

  _click1 = e => {
    WeuiDialogCtrl.show({
      header:'这是一个标题，可以为一行或者两行。',
      body:'弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
      footer:[
        {
          content:'辅助操作',
          theme:'default',
          onClick:()=>{
            console.log('secondary action');
          }
        },
        {
          content:'主操作',
          theme:'primary',
          onClick:()=>{
            console.log('primary action');
          }
        }
      ]
    })
  };

  _click2 = e => {
    WeuiDialogCtrl.show({
      body:'弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
      footer:[
        {
          content:'Only confirm',
          theme:'primary',
          onClick:()=>{
            console.log('OK!');
          }
        }
      ]
    })
  };


  render(){
    return (
      <div className="page dialog js_show">
        <PageHeader title="Dialog" desc="对话框" />
        <section className="page__bd page__bd_spacing">
          <WeuiButton theme="default" onClick={this._click1}>iOS Dialog Confirm</WeuiButton>
          <WeuiButton theme="default" onClick={this._click2}>iOS Dialog Alert</WeuiButton>
        </section>
        <PageFooter bottom />
      </div>
    )
  }
}
