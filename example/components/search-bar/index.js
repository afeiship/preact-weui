import {Component, h} from 'preact';

import PageFooter from '../_common/page-footer';
import PageHeader from '../_common/page-header';
import WeuiSearchBar from 'src/search-bar/index';

export default class extends Component{

  _onChange = e =>{
    console.log(e.target.value);
  };

  render(){
    return (
      <div className="page input js_show">
        <PageHeader title="SearchBar" desc="搜索栏" />
        <section className="page__bd page__bd_spacing">
          <WeuiSearchBar data-test="1234" onChange={this._onChange} />
        </section>
        <PageFooter />
      </div>
    )
  }
}
