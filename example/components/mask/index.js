import {Component, h} from 'preact';

import PageFooter from '../_common/page-footer';
import PageHeader from '../_common/page-header';
import WeuiMask from 'src/mask/index';

import WeuiButton from 'src/button/index';
import linkRef from 'linkref';


export default class extends Component{

  state = {
    visible: false
  };

  _click1 = e => {
    const {msk} = this.refs;
    this.setState({ visible:true });
  };

  _click2 = e => {
    console.log('click2');
  };

  _click3 = e => {
    this.setState({ visible:false });
  };

  render(){
    return (
      <div className="page mask js_show">
        <PageHeader title="Mask" desc="遮罩" />
        <section className="page__bd page__bd_spacing">
          <WeuiMask onClick={this._click3} visible={this.state.visible} ref={linkRef(this, 'msk')} />
          <WeuiButton theme="default" onClick={this._click1}>Show mask</WeuiButton>
          <WeuiButton theme="default" onClick={this._click2}>Hide mask</WeuiButton>
        </section>
        <PageFooter bottom />
      </div>
    )
  }
}
