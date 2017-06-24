import {CategoryHeader, Page, PageBody, PageFooter, PageHeader} from '../_common/index';
import {Component, h} from 'preact';
export default class extends Component{
  render(){
    return (
      <Page page="home">
        <PageHeader title='<img src="./components/_assets/images/logo.png" alt="WeUI" height="21px">' desc='WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。' />

        <PageBody>
          <ul>
            <li>
              <CategoryHeader title="表单" icon="icon_nav_form.png" />
            </li>
            <li>
              <CategoryHeader title="基础组件" icon="icon_nav_layout.png" />
            </li>
            <li>
              <CategoryHeader title="操作反馈" icon="icon_nav_feedback.png" />
            </li>
            <li>
              <CategoryHeader title="导航相关" icon="icon_nav_nav.png" />
            </li>
            <li>
              <CategoryHeader title="搜索相关" icon="icon_nav_search.png" />
            </li>
            <li>
              <CategoryHeader title="层级规范" icon="icon_nav_z-index.png" />
            </li>
          </ul>
        </PageBody>
      </Page>
    )
  }
}
