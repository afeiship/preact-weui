import {Component, h} from 'preact';

import PageBody from './page-body';
import PageFooter from './page-footer';
import PageHeader from './page-header';

class Page extends Component{
  render({page,children}){
    return (
      <section className={`page ${page} js_show`}>
      {children}
      </section>
    )
  }
}


export {
  Page,
  PageBody,
  PageFooter,
  PageHeader
}
