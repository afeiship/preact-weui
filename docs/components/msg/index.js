import {Component, h} from 'preact';
import {route} from 'preact-router';


import PageFooter from '../_common/page-footer';
import PageHeader from '../_common/page-header';
import WeuiMsg from 'src/msg/index';

import WeuiButton from 'src/button/index';

export default class extends Component{

  _toSuccess = e => {
    route('/msg-success');
  };

  _toWarn = e => {
    route('/msg-warn');
  };

  render(){
    return (
      <div className="page msg js_show">
        <PageHeader title="Msg" desc="提示页" />
        <section className="page__bd page__bd_spacing">
          <WeuiButton onClick={this._toSuccess} theme="default">成功提示页</WeuiButton>
          <WeuiButton onClick={this._toWarn} theme="default">失败提示页</WeuiButton>
        </section>
        <PageFooter />
      </div>
    )
  }
}
