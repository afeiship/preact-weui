import {Component, h} from 'preact';

import PageFooter from '../_common/page-footer';
import PageHeader from '../_common/page-header';
import PageBody from '../_common/page-body';

import {WeuiCells, WeuiCell, WeuiLink, WeuiCellsTitle, WeuiCellBody, WeuiCellFooter} from 'src/cells/index';

import {
  WeuiMediaBox,
  WeuiMediaBoxHeader,
  WeuiMediaBoxBody,
  WeuiMediaBoxTitle,
  WeuiMediaBoxDesc,
  WeuiMediaBoxThumb
} from 'src/media-box/index';

import {
  WeuiPanel,
  WeuiPanelHeader,
  WeuiPanelBody,
  WeuiPanelFooter
} from 'src/panel/index';

export default class extends Component {

  render({items}) {
    return (
      <div className="page panel js_show">
        <PageHeader title="Panel" desc="面板"/>
        <PageBody spacing={false}>

          <WeuiPanel>
            <WeuiPanelHeader>图文组合列表</WeuiPanelHeader>
            <WeuiPanelBody>
              <WeuiMediaBox>
                <WeuiMediaBoxHeader>
                  <WeuiMediaBoxThumb class="weui-media-box__thumb" src="http://placeholder.qiniudn.com/80x80" alt=""/>
                </WeuiMediaBoxHeader>
                <WeuiMediaBoxBody>
                  <WeuiMediaBoxTitle>标题二</WeuiMediaBoxTitle>
                  <WeuiMediaBoxDesc>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</WeuiMediaBoxDesc>
                </WeuiMediaBoxBody>
              </WeuiMediaBox>

              <WeuiMediaBox>
                <WeuiMediaBoxHeader>
                  <WeuiMediaBoxThumb class="weui-media-box__thumb" src="http://placeholder.qiniudn.com/80x80" alt=""/>
                </WeuiMediaBoxHeader>
                <WeuiMediaBoxBody>
                  <WeuiMediaBoxTitle>标题二</WeuiMediaBoxTitle>
                  <WeuiMediaBoxDesc>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</WeuiMediaBoxDesc>
                </WeuiMediaBoxBody>
              </WeuiMediaBox>
            </WeuiPanelBody>
            <WeuiPanelFooter>
              <WeuiCell link access>
                <WeuiCellBody>查看更多</WeuiCellBody>
                <WeuiCellFooter />
              </WeuiCell>
            </WeuiPanelFooter>
          </WeuiPanel>

          <WeuiPanel>
            <WeuiPanelHeader>文字组合列表</WeuiPanelHeader>
            <WeuiPanelBody>
              <WeuiMediaBox role="text">
                <WeuiMediaBoxTitle>
                  标题一
                </WeuiMediaBoxTitle>
                <WeuiMediaBoxBody>
                  <WeuiMediaBoxDesc>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</WeuiMediaBoxDesc>
                </WeuiMediaBoxBody>
              </WeuiMediaBox>

              <WeuiMediaBox role="text">
                <WeuiMediaBoxTitle>
                  标题一
                </WeuiMediaBoxTitle>
                <WeuiMediaBoxBody>
                  <WeuiMediaBoxDesc>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</WeuiMediaBoxDesc>
                </WeuiMediaBoxBody>
              </WeuiMediaBox>
            </WeuiPanelBody>
            <WeuiPanelFooter>
              <WeuiCell link access>
                <WeuiCellBody>查看更多</WeuiCellBody>
                <WeuiCellFooter />
              </WeuiCell>
            </WeuiPanelFooter>
          </WeuiPanel>


        </PageBody>
        <PageFooter/>
      </div>
    )
  }
}
