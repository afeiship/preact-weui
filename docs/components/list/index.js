import {Component, h} from 'preact';

import PageFooter from '../_common/page-footer';
import PageHeader from '../_common/page-header';
import PageBody from '../_common/page-body';

import {
  WeuiCells,
  WeuiCell,
  WeuiLink,
  WeuiCellsTitle,
  WeuiCellHeader,
  WeuiCellBody,
  WeuiCellFooter
} from 'src/cells/index';

export default class extends Component {

  render({items}) {
    return (
      <div className="page input js_show">
        <PageHeader title="Input" desc="表单输入"/>
        <PageBody spacing={false}>
          <WeuiCellsTitle>带图标、说明的列表项</WeuiCellsTitle>
          <WeuiCells>
            <WeuiCell>
              <WeuiCellHeader>
                <img src="http://placeholder.qiniudn.com/80x80" width={20} alt=""/>
              </WeuiCellHeader>
              <WeuiCellBody>
                标题文字
              </WeuiCellBody>
              <WeuiCellFooter>
                说明文字
              </WeuiCellFooter>
            </WeuiCell>

            <WeuiCell>
              <WeuiCellHeader>
                <img src="http://placeholder.qiniudn.com/80x80" width={20} alt=""/>
              </WeuiCellHeader>
              <WeuiCellBody>
                标题文字
              </WeuiCellBody>
              <WeuiCellFooter>
                说明文字
              </WeuiCellFooter>
            </WeuiCell>
          </WeuiCells>

          <WeuiCellsTitle>带跳转的列表项</WeuiCellsTitle>
          <WeuiCells>
            <WeuiCell access>
              <WeuiCellBody>cell standard</WeuiCellBody>
              <WeuiCellFooter />
            </WeuiCell>
            <WeuiCell access>
              <WeuiCellBody>cell standard</WeuiCellBody>
              <WeuiCellFooter />
            </WeuiCell>
          </WeuiCells>

        </PageBody>
        <PageFooter />
      </div>
    )
  }
}
