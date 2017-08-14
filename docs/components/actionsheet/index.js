import {Component, h} from 'preact';

import PageFooter from '../_common/page-footer';
import PageHeader from '../_common/page-header';
import {WeuiActionSheet,WeuiActionSheetCtrl} from 'src/actionsheet/index';
import WeuiButton from 'src/button/index';


export default class extends Component{

  state = {
    visible: false
  };


  componentDidMount() {
    WeuiActionSheetCtrl.createInstance();
  }


  _click1 = e => {
    WeuiActionSheetCtrl.show({
      title:'这是一个标题，可以为一行或者两行。',
      items:[{
        role:'menu',
        content:'Are you sure?'
      },{
        role:'menu',
        content:'Once deleted, you will never find it.'
      },{
        role:'action',
        content:'Cancel',
        action:'cancel'
      }],
      onClick:(inEvent)=>{
        console.log(inEvent);
      }
    }).then(()=>{
      console.log('shown!')
    });
  };

  render(){
    return (
      <div className="page mask js_show">
        <PageHeader title="ActionSheet" desc="弹出式菜单" />
        <section className="page__bd page__bd_spacing">
          <WeuiButton theme="default" onClick={this._click1}>iOS ActionSheet</WeuiButton>
        </section>
        <PageFooter bottom />
      </div>
    )
  }
}
