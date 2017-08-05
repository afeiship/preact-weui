import {Component, h} from 'preact';

import classNames from 'classnames';

export default class extends Component {
  render(props) {
    const {className, access, link, ...options} = props;
    return (
      <div href="javascript:void(0);"
        className={classNames('weui-cell', {
        'weui-cell_access': access,
        'weui-cell_link': link
      }, className)} {...options} />
    );
  }
}
