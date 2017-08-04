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

import {
  WeuiMediaBox,
  WeuiMediaBoxHeader,
  WeuiMediaBoxBody,
  WeuiMediaBoxTitle,
  WeuiMediaBoxDesc,
  WeuiMediaBoxThumb,
  WeuiMediaBoxInfo,
  WeuiMediaBoxInfoMeta,
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

          <WeuiPanel>
            <WeuiPanelHeader>文字组合列表</WeuiPanelHeader>
            <WeuiPanelBody>
              <WeuiMediaBox role="small-appmsg">
                <WeuiCells>
                  <WeuiCell access>
                    <WeuiCellHeader>
                      <img style="width:20px;margin-right:5px;display:block" src="http://placeholder.qiniudn.com/20" alt=""/>
                    </WeuiCellHeader>
                    <WeuiCellBody className="weui-cell_primary">文字标题</WeuiCellBody>
                    <WeuiCellFooter />
                  </WeuiCell>

                  <WeuiCell access>
                    <WeuiCellHeader>
                      <img style="width:20px;margin-right:5px;display:block" src="http://placeholder.qiniudn.com/20" alt=""/>
                    </WeuiCellHeader>
                    <WeuiCellBody className="weui-cell_primary">文字标题</WeuiCellBody>
                    <WeuiCellFooter />
                  </WeuiCell>
                </WeuiCells>
              </WeuiMediaBox>
            </WeuiPanelBody>
          </WeuiPanel>

          <WeuiPanel>
            <WeuiPanelHeader>文字列表附来源</WeuiPanelHeader>
            <WeuiPanelBody>
              <WeuiMediaBox role="text">
                <WeuiMediaBoxTitle>
                  标题一
                </WeuiMediaBoxTitle>
                <WeuiMediaBoxBody>
                  <WeuiMediaBoxDesc>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</WeuiMediaBoxDesc>
                </WeuiMediaBoxBody>

                <WeuiMediaBoxInfo>
                  <WeuiMediaBoxInfoMeta> 文字来源 </WeuiMediaBoxInfoMeta>
                  <WeuiMediaBoxInfoMeta> 时间 </WeuiMediaBoxInfoMeta>
                  <WeuiMediaBoxInfoMeta extra> 其它信息 </WeuiMediaBoxInfoMeta>
                </WeuiMediaBoxInfo>
              </WeuiMediaBox>
            </WeuiPanelBody>
          </WeuiPanel>




        </PageBody>
        <PageFooter/>
      </div>
    )
  }
}
