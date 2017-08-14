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
import WeuiBadge from 'src/badge/index';

import pic160Image from 'example/styles/images/pic_160.png';

export default class extends Component {

  render({items}) {
    return (
      <div className="page input js_show">
        <PageHeader title="Badge" desc="徽章"/>
        <PageBody spacing={false}>
          <WeuiCellsTitle>新消息提示跟摘要信息后，统一在列表右侧</WeuiCellsTitle>
          <WeuiCells>
            <WeuiCell access>
              <WeuiCellBody>
                单行列表
              </WeuiCellBody>
              <WeuiCellFooter>
                详细信息
                <WeuiBadge dot={true}/>
              </WeuiCellFooter>
            </WeuiCell>
          </WeuiCells>

          <WeuiCellsTitle>未读数红点跟在主题信息后，统一在列表左侧</WeuiCellsTitle>
          <WeuiCells>
            <WeuiCell access>
              <WeuiCellHeader className="rel" style="margin-right:10px;">
                <img src={pic160Image} width={50} alt=""/>
                <WeuiBadge style="position: absolute;top: -.4em;right: -.4em;" children="8"/>
              </WeuiCellHeader>
              <WeuiCellBody>
                <p>联系人名称</p>
                <p style="font-size: 13px;color: #888888;">摘要信息</p>
              </WeuiCellBody>
            </WeuiCell>

            <WeuiCell access>
              <WeuiCellHeader className="rel" style="margin-right:10px;">
                单行列表
                <WeuiBadge children="new"/>
              </WeuiCellHeader>
              <WeuiCellBody>
                <p style="color: #888888; text-align:right;">摘要信息</p>
              </WeuiCellBody>
              <WeuiCellFooter />
            </WeuiCell>


          </WeuiCells>


        </PageBody>
        <PageFooter />
      </div>
    )
  }
}
