import {Component, h} from 'preact';

import classNames from 'classnames';

export default class extends Component {
  render(props) {
    const {className, bottom, ...options} = props;
    return (
      <footer className={classNames("weui-footer", {
        'weui-footer_fixed-bottom': bottom
      }, className)} {...options}  />
    );
  }
}
