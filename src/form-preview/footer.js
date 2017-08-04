import {Component, h} from 'preact';

import classNames from 'classnames';
import noop from 'noop';

export default class extends Component {
  static defaultProps = {};

  render(props) {
    const {className, ...options} = props;
    return (
      <footer className={classNames("weui-form-preview__ft", className)} {...options} />
    );
  }
}
