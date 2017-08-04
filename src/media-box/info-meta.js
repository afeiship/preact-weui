import {Component, h} from 'preact';

import classNames from 'classnames';
import noop from 'noop';

export default class extends Component {
  static defaultProps = {
    extra: false
  };

  render(props) {
    const {className, extra, ...options} = props;
    return (
      <li className={classNames("weui-media-box__info__meta", {
        'weui-media-box__info__meta_extra': extra
      }, className)} {...options} />
    );
  }
}
