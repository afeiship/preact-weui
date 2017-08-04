import {Component, h} from 'preact';

import classNames from 'classnames';
import noop from 'noop';

export default class extends Component {
  render(props) {
    const {className, ...options} = props;
    return (
      <article className={classNames("weui-article", className)} {...options}  />
    );
  }
}
