import {Component, h} from 'preact';

import PageFooter from '../_common/page-footer';
import PageHeader from '../_common/page-header';
import PageBody from '../_common/page-body';

import WeuiGrid from 'src/grid/index';

import iconImage from 'example/styles/images/icon_tabbar.png';

export default class extends Component {
  state = {
    items: [
      {
        icon: iconImage,
        text: 'Grid1'
      },
      {
        icon: iconImage,
        text: 'Grid1'
      },
      {
        icon: iconImage,
        text: 'Grid1'
      },
      {
        icon: iconImage,
        text: 'Grid1'
      },
      {
        icon: iconImage,
        text: 'Grid1'
      },
      {
        icon: iconImage,
        text: 'Grid1'
      },
      {
        icon: iconImage,
        text: 'Grid1'
      },
      {
        icon: iconImage,
        text: 'Grid1'
      },
      {
        icon: iconImage,
        text: 'Grid1'
      }
    ]
  };

  render({items}) {
    return (
      <div className="page grid js_show">
        <PageHeader title="Badge" desc="徽章"/>
        <PageBody spacing={false}>
          <WeuiGrid items={this.state.items}/>
        </PageBody>
        <PageFooter bottom />
      </div>
    )
  }
}
