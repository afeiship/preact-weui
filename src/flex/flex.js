import {Component, h} from 'preact';

import classNames from 'classnames';
import noop from 'noop';

export default class extends Component {
  render(props) {
    const {className, ...options} = props;
    return (
      <section className={classNames('weui-flex', className)} {...options} />
    );
  }
}
