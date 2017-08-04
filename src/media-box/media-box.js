import {Component, h} from 'preact';

import classNames from 'classnames';
import noop from 'noop';

export default class extends Component {
  static defaultProps = {
    role: 'appmsg' //[small-appmsg,appmsg,text]
  };

  render(props) {
    const {className,role, ...options} = props;
    return (
      <div className={classNames('weui-media-box', `weui-media-box_${role}`, className)} {...options} />
    );
  }
}
