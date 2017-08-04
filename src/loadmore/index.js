import {Component, h} from 'preact';

import classNames from 'classnames';
import noop from 'noop';

export default class extends Component {
  static defaultProps = {
    line: false,
    dot: false,
    loading: false
  };

  get children() {
    const {items} = this.props;
    return items.map(item => {
      return (
        <a href="javascript:;" class="weui-grid">
          <div class="weui-grid__icon">
            <img src={item.icon} alt=""/>
          </div>
          <p class="weui-grid__label">{item.text}</p>
        </a>
      );
    });
  }


  render(props) {
    const {className, line, dot, loading, children, ...options} = props;
    return (
      <div className={classNames("weui-loadmore", {
        'weui-loadmore_line': line,
        'weui-loadmore_dot': dot
      }, className)}>
        {loading && <i className="weui-loading"/>}
        {children && <span className="weui-loadmore__tips">{children}</span>}
      </div>
    );
  }
}
