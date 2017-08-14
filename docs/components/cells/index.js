import {CategoryHeader, Page, PageBody, PageFooter, PageHeader} from '../_common/index';
import {Component, h} from 'preact';

import {WeuiCells,WeuiCell,WeuiCellsTitle,WeuiCellBody,WeuiCellFooter} from 'src/cells/index';

export default class extends Component{
  _click = e =>{
    console.log('click.');
  };

  render(){
    return (
      <Page page="home">
        <PageHeader title='Cells' desc='Cells' />
        <PageBody>
            <WeuiCellsTitle>No title</WeuiCellsTitle>
            <WeuiCells>
              <WeuiCell access>
                <WeuiCellBody>Link1</WeuiCellBody>
                <WeuiCellFooter />
              </WeuiCell>
              <WeuiCell access>
                <WeuiCellBody>Link2</WeuiCellBody>
                <WeuiCellFooter />
              </WeuiCell>
              <WeuiCell>
                <WeuiCellBody>Option3(Can not click)</WeuiCellBody>
                <WeuiCellFooter />
              </WeuiCell>
            </WeuiCells>

            <WeuiCellsTitle>Another group</WeuiCellsTitle>
            <WeuiCells>
              <WeuiCell access onClick={this._click}>
                <WeuiCellBody>Link1</WeuiCellBody>
                <WeuiCellFooter />
              </WeuiCell>
              <WeuiCell access onClick={this._click}>
                <WeuiCellBody>Link2</WeuiCellBody>
                <WeuiCellFooter />
              </WeuiCell>
            </WeuiCells>
        </PageBody>
        <PageFooter />
      </Page>
    )
  }
}
