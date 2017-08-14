import {Component, h} from 'preact';

import PageFooter from '../_common/page-footer';
import PageHeader from '../_common/page-header';
import PageBody from '../_common/page-body';

export default class extends Component {
  render({items}) {
    return (
      <div className="page layers js_show">
        <PageHeader title="WeUI页面层级" desc="用于规范WeUI页面元素所属层级、层级顺序及组合规范。"/>
        <PageBody spacing={false}>
          <div className="layers j_layers">
            <div data-name="popout" className="j_layer layers__layer layers__layer_popout j_transform"><span>Popout</span></div>
            <div data-name="mask" className="j_layer layers__layer layers__layer_mask j_transform"><span>Mask</span></div>
            <div data-name="navigation" className="j_layer layers__layer layers__layer_navigation j_transform"><span>Navigation</span></div>
            <div data-name="content" className="j_layer layers__layer layers__layer_content j_transform"><span>Content</span></div>
          </div>
        </PageBody>
        <PageFooter bottom />
      </div>
    )
  }
}
