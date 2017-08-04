import {Component, h} from 'preact';

import classNames from 'classnames';
import noop from 'noop';

export default class extends Component {
  static defaultProps = {
    type: 'text'
  };

  render(props) {
    const {className, type, onChange, ...options} = props;
    return (
      <input className={classNames('weui-input', className)} onInput={onChange} onChange={onChange} type={type}  {...options} />
    );
  }
}
