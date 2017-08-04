import {Component, h} from 'preact';

import classNames from 'classnames';
import noop from 'noop';

export default class extends Component {
  static defaultProps = {
    items: []
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
    const {className, items, ...options} = props;
    return (
      <div className={classNames('weui-grids', className)} {...options}>
        { this.children }
      </div>
    );
  }
}
