import {Component, h} from 'preact';

import IconFooterImg from '../_assets/images/icon_footer_link.png';

export default class extends Component{
  render(){
    return (
      <footer class="page__ft j_bottom">
        <a href="/"><img src={IconFooterImg} /></a>
      </footer>
    )
  }
}
