import {CategoryHeader, Page, PageBody, Accordion, PageFooter, PageHeader} from '../_common/index';
import {Component, h} from 'preact';

import {route} from 'preact-router';


export default class extends Component {
  static defaultProps = {
    form_items: ['button', 'input', 'list', 'slider', 'uploader']
  };

  _click = e => {
    route(e);
  };

  render() {
    const {form_items} = this.props;
    return (
      <Page page="home">
        <PageHeader title='<img src="./components/_assets/images/logo.png" alt="WeUI" height="21px">'
                    desc='WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。'/>
        <PageBody>
          <Accordion icon="icon_nav_form.png" title="表单" items={form_items} onClick={this._click}/>
          <Accordion icon="icon_nav_layout.png" title="基础组件" items={form_items}/>
          <Accordion icon="icon_nav_feedback.png" title="操作反馈" items={form_items}/>
          <Accordion icon="icon_nav_nav.png" title="导航相关" items={form_items}/>
          <Accordion icon="icon_nav_search.png" title="搜索相关" items={form_items}/>
          <Accordion icon="icon_nav_z-index.png" title="层级规范" items={form_items}/>
        </PageBody>
        <PageFooter />
      </Page>
    )
  }
}
