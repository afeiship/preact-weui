import {Component, h} from 'preact';

import PageFooter from '../_common/page-footer';
import PageHeader from '../_common/page-header';
import PageBody from '../_common/page-body';
import WeuiButton from 'src/button/index';
import WeuiRadioGroup from 'src/radio-group/index';
import WeuiCheckboxGroup from 'src/checkbox-group/index';
import WeuiSwitch from 'src/switch/index';
import WeuiInput from 'src/input/index';
import WeuiTextarea from 'src/textarea/index';
import WeuiAgree from 'src/agree/index';

import {WeuiCells, WeuiCell, WeuiLink, WeuiCellsTitle, WeuiCellBody, WeuiCellFooter} from 'src/cells/index';

export default class extends Component {
  static defaultProps = {
    items: [
      'cell standard',
      'cell standard',
      'cell standard',
    ],
    check_items: [
      'standard is dealt for u1.',
      'standard is dealt for u2.',
    ]
  };

  _change = (f, e) => {
    console.log('chnage e:->', e.target.value);
  };

  render({items}) {
    return (
      <div className="page input js_show">
        <PageHeader title="Input" desc="表单输入"/>
        <PageBody spacing={false}>
          <WeuiCellsTitle>单选列表项</WeuiCellsTitle>
          <WeuiRadioGroup name="test" items={items} onChange={this._change.bind(this, 'radio-grp')}>
            <WeuiLink>
              <WeuiCellBody>添加更多</WeuiCellBody>
            </WeuiLink>
          </WeuiRadioGroup>

          <WeuiCellsTitle>复选列表项</WeuiCellsTitle>
          <WeuiCheckboxGroup name="test-check" items={items} onChange={this._change.bind(this, 'checkbox-grp')}>
            <WeuiLink>
              <WeuiCellBody>添加更多</WeuiCellBody>
            </WeuiLink>
          </WeuiCheckboxGroup>

          <WeuiCellsTitle>开关</WeuiCellsTitle>
          <WeuiCells>
            <WeuiCell>
              <WeuiCellBody>
                标题文字
              </WeuiCellBody>
              <WeuiCellFooter>
                <WeuiSwitch name="test-switch" onChange={this._change.bind(this, 'sw1')}/>
              </WeuiCellFooter>
            </WeuiCell>

            <WeuiCell>
              <WeuiCellBody>
                兼容IE Edge的版本
              </WeuiCellBody>
              <WeuiCellFooter>
                <WeuiSwitch name="test-switch2" onChange={this._change.bind(this, 'sw2')}/>
              </WeuiCellFooter>
            </WeuiCell>
          </WeuiCells>

          <WeuiCellsTitle>文本框</WeuiCellsTitle>
          <WeuiCells>
            <WeuiCell>
              <WeuiCellBody>
                <WeuiInput placeholder="请输入文本" onChange={this._change.bind(this, 'input')}/>
              </WeuiCellBody>
            </WeuiCell>
          </WeuiCells>


          <WeuiCellsTitle>文本域</WeuiCellsTitle>
          <WeuiCells>
            <WeuiCell>
              <WeuiCellBody>
                <WeuiTextarea placeholder="请输入文本" onChange={this._change.bind(this, 'textarea')}/>
              </WeuiCellBody>
            </WeuiCell>
          </WeuiCells>


          <WeuiAgree onChange={this._change.bind(this, 'agree')}>
            <span className="weui-agree__text">
                阅读并同意<a href="javascript:void(0);">《相关条款》</a>
            </span>
          </WeuiAgree>


        </PageBody>
        <PageFooter />
      </div>
    )
  }
}
