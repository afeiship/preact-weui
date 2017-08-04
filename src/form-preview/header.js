import {Component, h} from 'preact';

import classNames from 'classnames';
import noop from 'noop';

export default class extends Component {
  static defaultProps = {};

  render(props) {
    const {className, ...options} = props;
    return (
      <header className={classNames("weui-form-preview__hd", className)} {...options} />
    );
  }
}
