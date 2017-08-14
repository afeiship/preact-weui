import {Component, h} from 'preact';

import PageFooter from '../_common/page-footer';
import PageHeader from '../_common/page-header';
import PageBody from '../_common/page-body';


import WeuiGallery from 'src/gallery/index';
import WeuiButton from 'src/button/index';

export default class extends Component {

  state = {
    visible: false
  };

  _click1 = e => {
    this.setState({visible: true})
  };

  _click2 = e => {
    this.setState({visible: false})
  };

  render() {
    return (
      <div className="page gallery js_show">
        <PageHeader title="Gallery" desc="Gallery"/>
        <PageBody>
          <WeuiButton theme="primary" onClick={this._click1}>Show Gallary</WeuiButton>
          <WeuiGallery onClick={this._click2} visible={this.state.visible} src="http://placeholder.qiniudn.com/80x80"/>
        </PageBody>
        <PageFooter bottom/>
      </div>
    )
  }
}
