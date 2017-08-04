import {Component, h} from 'preact';

import PageFooter from '../_common/page-footer';
import PageHeader from '../_common/page-header';
import PageBody from '../_common/page-body';

import {
  Flex,
  FlexItem,
} from 'src/flex/index';

export default class extends Component {

  render({items}) {
    return (
      <div className="page flex js_show">
        <PageHeader title="Flex" desc="Flex布局"/>
        <PageBody spacing={true}>
          <Flex>
            <FlexItem>
              <div className="placeholder">weui</div>
            </FlexItem>
          </Flex>

          <Flex>
            <FlexItem>
              <div className="placeholder">weui</div>
            </FlexItem>
            <FlexItem>
              <div className="placeholder">weui</div>
            </FlexItem>
          </Flex>

          <Flex>
            <FlexItem>
              <div className="placeholder">weui</div>
            </FlexItem>
            <FlexItem>
              <div className="placeholder">weui</div>
            </FlexItem>
            <FlexItem>
              <div className="placeholder">weui</div>
            </FlexItem>
          </Flex>

          <Flex>
            <FlexItem>
              <div className="placeholder">weui</div>
            </FlexItem>
            <FlexItem>
              <div className="placeholder">weui</div>
            </FlexItem>
            <FlexItem>
              <div className="placeholder">weui</div>
            </FlexItem>
            <FlexItem>
              <div className="placeholder">weui</div>
            </FlexItem>
          </Flex>

          <Flex>
            <div>
              <div className="placeholder">weui</div>
            </div>
            <FlexItem>
              <div className="placeholder">weui</div>
            </FlexItem>
            <div>
              <div className="placeholder">weui</div>
            </div>
          </Flex>
        </PageBody>
        <PageFooter bottom />
      </div>
    )
  }
}
