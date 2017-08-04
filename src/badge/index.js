import {Component, h} from 'preact';

import classNames from 'classnames';
import noop from 'noop';

export default class extends Component {
  render(props) {
    const {className, dot, ...options} = props;
    return (
      <span className={classNames("weui-badge", {'weui-badge_dot': dot}, className)} {...options}/>
    );
  }
}
