import {Component, h} from 'preact';

import PageFooter from '../_common/page-footer';
import PageHeader from '../_common/page-header';
import PageBody from '../_common/page-body';
import WeuiButton from 'src/button/index';
import WeuiRadioGroup from 'src/radio-group/index';

import {WeuiCells, WeuiCell, WeuiLink, WeuiCellsTitle, WeuiCellBody, WeuiCellFooter} from 'src/cells/index';

export default class extends Component {
  static defaultProps = {
    items: [
      'cell standard',
      'cell standard',
      'cell standard',
    ]
  };

  _change = e => {
    console.log('chnage e:->', e.target.value);
  };

  render({items}) {
    return (
      <div className="page input js_show">
        <PageHeader title="Input" desc="表单输入"/>
        <PageBody spacing={false}>
          <WeuiCellsTitle>单选列表项</WeuiCellsTitle>
          <WeuiRadioGroup name="test" items={items} onChange={this._change}>
            <WeuiLink>
              <WeuiCellBody>添加更多</WeuiCellBody>
            </WeuiLink>
          </WeuiRadioGroup>
        </PageBody>
        <PageFooter />
      </div>
    )
  }
}
