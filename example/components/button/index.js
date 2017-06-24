import {Component, h} from 'preact';
import {Page, PageBody, PageFooter, PageHeader} from '../_common/page';

import WeuiButton from 'src/button/index';

export default class extends Component{
  render(){
    return (
      <Page page="page">
        <PageHeader title="Button" desc="按钮" />
        <PageBody>
          <WeuiButton theme="primary">页面主操作 Normal</WeuiButton>
          <WeuiButton theme="primary" loading> 页面主操作 Loading </WeuiButton>
          <WeuiButton theme="primary" disabled> 页面主操作 Disabled </WeuiButton>
          <WeuiButton theme="default" >页面次要作 Normal</WeuiButton>
          <WeuiButton theme="default" loading> 页面次要作 Loading </WeuiButton>
          <WeuiButton theme="default" disabled> 页面次要作 Disabled </WeuiButton>
          <WeuiButton theme="default" onClick={this._onClick} theme="warn">警告类操作 Normal</WeuiButton>
          <WeuiButton theme="warn" loading> 警告类操作 Loading </WeuiButton>
          <WeuiButton theme="warn" disabled> 警告类操作 Disabled </WeuiButton>
          <div className="button-sp-area">
            <WeuiButton plain theme="default">按钮</WeuiButton>
            <WeuiButton plain disabled theme="default">按钮</WeuiButton>
            <WeuiButton plain theme="primary">按钮</WeuiButton>
            <WeuiButton plain disabled theme="primary">按钮 </WeuiButton>
            <WeuiButton mini theme="default">按钮</WeuiButton>
            <WeuiButton mini theme="primary">按钮</WeuiButton>
            <WeuiButton mini theme="warn">按钮</WeuiButton>
          </div>
        </PageBody>
        <PageFooter />
      </Page>
    )
  }
}
