import {Component, h} from 'preact';

import PageFooter from '../_common/page-footer';
import PageHeader from '../_common/page-header';
import WeuiMsg from 'src/msg/index';

import WeuiButton from 'src/button/index';

export default class extends Component{
  render(){
    return (
      <div className="page msg js_show">
        <PageHeader title="Msg" desc="提示页" />
        <section className="page__bd page__bd_spacing">
          Success!
        </section>
        <PageFooter />
      </div>
    )
  }
}
