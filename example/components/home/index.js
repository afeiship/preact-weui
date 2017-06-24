import {Component, h} from 'preact';
import {Page, PageBody, PageFooter, PageHeader} from '../_common/page';
export default class extends Component{
  render(){
    return (
      <Page className="home-entry">
        <PageHeader title='<img src="./components/_assets/images/logo.png" alt="WeUI" height="21px">' desc='WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。' />
      </Page>
    )
  }
}
