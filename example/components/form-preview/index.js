import {Component, h} from 'preact';

import PageFooter from '../_common/page-footer';
import PageHeader from '../_common/page-header';
import PageBody from '../_common/page-body';

import {
  WeuiFormPreview,
  WeuiFormPreviewHeader,
  WeuiFormPreviewBody,
  WeuiFormPreviewFooter,
  WeuiFormPreviewButton,
  WeuiFormPreviewItem,
  WeuiFormPreviewLabel,
  WeuiFormPreviewValue,
} from 'src/form-preview/index';

export default class extends Component {

  render({items}) {
    return (
      <div className="page form-preview js_show">
        <PageHeader title="FormPreview" desc="表单预览"/>
        <PageBody spacing={false}>
          <WeuiFormPreview>
            <WeuiFormPreviewHeader>
              <WeuiFormPreviewItem>
                <WeuiFormPreviewLabel>
                  付款金额
                </WeuiFormPreviewLabel>
                <WeuiFormPreviewValue>
                  ¥2400.00
                </WeuiFormPreviewValue>
              </WeuiFormPreviewItem>
            </WeuiFormPreviewHeader>

            <WeuiFormPreviewBody>
              <WeuiFormPreviewItem>
                <WeuiFormPreviewLabel>
                  商品
                </WeuiFormPreviewLabel>
                <WeuiFormPreviewValue>
                  电动打蛋机
                </WeuiFormPreviewValue>
              </WeuiFormPreviewItem>

              <WeuiFormPreviewItem>
                <WeuiFormPreviewLabel>
                  标题标题
                </WeuiFormPreviewLabel>
                <WeuiFormPreviewValue>
                  名字名字名字
                </WeuiFormPreviewValue>
              </WeuiFormPreviewItem>
            </WeuiFormPreviewBody>

            <WeuiFormPreviewFooter>
              <WeuiFormPreviewButton>操作</WeuiFormPreviewButton>
            </WeuiFormPreviewFooter>
          </WeuiFormPreview>

          <br/>
          <br/>

          <WeuiFormPreview>
            <WeuiFormPreviewHeader>
              <WeuiFormPreviewItem>
                <WeuiFormPreviewLabel>
                  付款金额
                </WeuiFormPreviewLabel>
                <WeuiFormPreviewValue>
                  ¥2400.00
                </WeuiFormPreviewValue>
              </WeuiFormPreviewItem>
            </WeuiFormPreviewHeader>

            <WeuiFormPreviewBody>
              <WeuiFormPreviewItem>
                <WeuiFormPreviewLabel>
                  商品
                </WeuiFormPreviewLabel>
                <WeuiFormPreviewValue>
                  电动打蛋机
                </WeuiFormPreviewValue>
              </WeuiFormPreviewItem>

              <WeuiFormPreviewItem>
                <WeuiFormPreviewLabel>
                  标题标题
                </WeuiFormPreviewLabel>
                <WeuiFormPreviewValue>
                  很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字
                </WeuiFormPreviewValue>
              </WeuiFormPreviewItem>
            </WeuiFormPreviewBody>

            <WeuiFormPreviewFooter>
              <WeuiFormPreviewButton theme="default">辅助操作</WeuiFormPreviewButton>
              <WeuiFormPreviewButton theme="primary">操作</WeuiFormPreviewButton>
            </WeuiFormPreviewFooter>
          </WeuiFormPreview>

        </PageBody>
        <PageFooter/>
      </div>
    )
  }
}
