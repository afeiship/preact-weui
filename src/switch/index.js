import {Component, h} from 'preact';

import classNames from 'classnames';
import noop from 'noop';

export default class extends Component {
  static defaultProps = {
    value: false,
    onChange: noop
  };

  _onChange = e => {
    const {onChange} = this.props;
    onChange({target: {value: e.target.checked}});
    e.stopPropagation();
  };

  render(props) {
    const {name, className, value, ...options} = props;
    const idFor = `id-${name}`;
    return (
      <label for={idFor} className={classNames("weui-switch-cp", className)} {...options}>
        <input id={idFor} checked={value} onChange={this._onChange} className="weui-switch-cp__input" type="checkbox"/>
        <div class="weui-switch-cp__box"/>
      </label>
    );
  }
}
