import {Component, h} from 'preact';

import PageFooter from '../_common/page-footer';
import PageHeader from '../_common/page-header';
import WeuiButton from 'src/button/index';

export default class extends Component{
  render(){
    return (
      <div className="page input js_show">
        <PageHeader title="Input" desc="表单输入" />
        <section className="page__bd page__bd_spacing">
          <WeuiButton theme="primary">页面主操作 Normal</WeuiButton>
        </section>
        <PageFooter />
      </div>
    )
  }
}
