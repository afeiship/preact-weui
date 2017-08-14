import {Component, h} from 'preact';

import PageFooter from '../_common/page-footer';
import PageHeader from '../_common/page-header';
import PageBody from '../_common/page-body';

import picArticleImage from 'docs/styles/images/pic_article.png';

import WeuiArticle from 'src/article/index';

export default class extends Component {

  render() {
    return (
      <div className="page input js_show">
        <PageHeader title="Article" desc="文章"/>
        <PageBody spacing={false}>
          <WeuiArticle>
            <h1>大标题</h1>
            <section>
              <h2 className="title">章标题</h2>
              <section>
                <h3>1.1 节标题</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
                <p>
                  <img src={picArticleImage} alt=""/>
                  <img src={picArticleImage} alt=""/>
                </p>
              </section>
              <section>
                <h3>1.2 节标题</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </section>
            </section>
          </WeuiArticle>
        </PageBody>
        <PageFooter />
      </div>
    )
  }
}
