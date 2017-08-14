import {Component, h} from 'preact';

import PageFooter from '../_common/page-footer';
import PageHeader from '../_common/page-header';
import PageBody from '../_common/page-body';

import picArticleImage from 'docs/styles/images/pic_article.png';

import {WeuiFooter, WeuiFooterText, WeuiFooterLink, WeuiFooterLinks} from 'src/footer/index';

export default class extends Component {

  render() {
    return (
      <div className="page footer js_show">
        <PageHeader title="Footer" desc="页脚"/>
        <PageBody>
          <WeuiFooter>
            <WeuiFooterText>Copyright © 2008-2016 weui.io</WeuiFooterText>
          </WeuiFooter>

          <br/>
          <br/>

          <WeuiFooter>
            <WeuiFooterLinks>
              <WeuiFooterLink>
                底部链接
              </WeuiFooterLink>
            </WeuiFooterLinks>
            <WeuiFooterText>Copyright © 2008-2016 weui.io</WeuiFooterText>
          </WeuiFooter>

          <br/>
          <br/>


          <WeuiFooter>
            <WeuiFooterLinks>
              <WeuiFooterLink>
                底部链接
              </WeuiFooterLink>
              <WeuiFooterLink>
                底部链接
              </WeuiFooterLink>
            </WeuiFooterLinks>
            <WeuiFooterText>Copyright © 2008-2016 weui.io</WeuiFooterText>
          </WeuiFooter>

          <br/>
          <br/>


          <WeuiFooter bottom>
            <WeuiFooterLinks>
              <WeuiFooterLink>
                Weui 首页
              </WeuiFooterLink>
            </WeuiFooterLinks>
            <WeuiFooterText>Copyright © 2008-2016 weui.io</WeuiFooterText>
          </WeuiFooter>

        </PageBody>
      </div>
    )
  }
}
