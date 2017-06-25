import {Component, h} from 'preact';
import classNames from 'classnames';


import IconFooterImg from '../_assets/images/icon_footer_link.png';

export default class extends Component{
  render({bottom}){
    return (
      <footer className={classNames("page__ft",{
        'j_bottom':bottom
      })}>
        <a href="/"><img src={IconFooterImg} /></a>
      </footer>
    )
  }
}
