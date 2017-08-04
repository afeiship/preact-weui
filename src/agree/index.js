import {Component, h} from 'preact';

import classNames from 'classnames';
import noop from 'noop';

export default class extends Component {
  static defaultProps = {
    onChange: noop
  };

  _onChange = e => {
    const {onChange} = this.props;
    onChange({target: {value: e.target.checked}});
    e.stopPropagation();
  };

  render(props) {
    const {className, value, children, ...options} = props;
    return (
      <label for="weuiAgree" className={classNames("weui-agree", className)} {...options}>
        <input id="weuiAgree" type="checkbox" checked={value} className="weui-agree__checkbox" onChange={this._onChange}/>
        <span className="weui-agree__text"> {children} </span>
      </label>
    );
  }
}
