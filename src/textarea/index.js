import {Component, h} from 'preact';

import classNames from 'classnames';
import noop from 'noop';

export default class extends Component {
  static defaultProps = {};

  render(props) {
    const {className, onChange, ...options} = props;
    return (
      <textarea className={classNames("weui-textarea", className)} onInput={onChange}
                onChange={onChange}  {...options}/>
    );
  }
}
