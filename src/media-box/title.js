import {Component, h} from 'preact';

import classNames from 'classnames';
import noop from 'noop';

export default class extends Component {
  static defaultProps = {};

  render(props) {
    const {className, ...options} = props;
    return (
      <h4 className={classNames("weui-media-box__title", className)} {...options} />
    );
  }
}
