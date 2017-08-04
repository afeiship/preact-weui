import {Component, h} from 'preact';

import PageFooter from '../_common/page-footer';
import PageHeader from '../_common/page-header';
import PageBody from '../_common/page-body';

import Loadmore from 'src/loadmore/index';

export default class extends Component {

  render({items}) {
    return (
      <div className="page loadmore js_show">
        <PageHeader title="Loadmore" desc="加载更多"/>
        <PageBody spacing={false}>

          <Loadmore loading>加载更多</Loadmore>
          <Loadmore line>暂无数据</Loadmore>
          <Loadmore line dot />
        </PageBody>
        <PageFooter bottom />
      </div>
    )
  }
}
