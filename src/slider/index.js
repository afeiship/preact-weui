import {Component, h} from 'preact';

import classNames from 'classnames';

export default class extends Component {
  render(props) {
    const {className, ...options} = props;

    return (
      <div className={classNames('weui-slider-box', className)} {...options}>
        <div className="weui-slider">
          <div data-role="slider-inner" className="weui-slider__inner">
            <div data-role="slider-track" style="width: 38%;" className="weui-slider__track"></div>
            <div data-role="slider-handler" style="left: 38%;" className="weui-slider__handler"></div>
          </div>
        </div>
        <div className="weui-slider-box__value">38</div>
      </div>
    );
  }
}
