import {Component, h} from 'preact';

import classNames from 'classnames';
import noop from 'noop';

export default class extends Component {
  static defaultProps = {
    theme: 'primary'
  };

  render(props) {
    const {className, theme, ...options} = props;
    return (
      <button className={classNames("weui-form-preview__btn", `weui-form-preview__btn_${theme}`, className)} {...options} />
    );
  }
}
