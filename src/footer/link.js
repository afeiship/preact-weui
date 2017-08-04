import {Component, h} from 'preact';

import classNames from 'classnames';
import noop from 'noop';

export default class extends Component {
  render(props) {
    const {className, ...options} = props;
    return (
      <a href="javascript:void(0);" className={classNames("weui-footer__link", className)} {...options} />
    );
  }
}
