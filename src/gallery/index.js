import {Component, h} from 'preact';

import classNames from 'classnames';
import noop from 'noop';

export default class extends Component {

  static defaultProps = {
    visible: false
  };

  render(props) {
    const {className, src, visible, ...options} = props;
    return (
      <div className={classNames('weui-gallery', className)}
           style={`display: ${visible ? 'block' : 'none'}`} {...options}>
        <span className="weui-gallery__img" style={{backgroundImage: `url(${src})`}}/>
        <div className="weui-gallery__opr">
          <a href="javascript:" className="weui-gallery__del">
            <i className="weui-icon-delete weui-icon_gallery-delete"/>
          </a>
        </div>
      </div>
    );
  }
}
