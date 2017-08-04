import {Component, h} from 'preact';

import classNames from 'classnames';
import noop from 'noop';

export default class extends Component {
  static defaultProps = {
    items: [],
    value: 0,
    onChange: noop
  };

  get children() {
    const {name, items, value} = this.props;

    return items.map((item, index) => {
      const idFor = `id-${name}-${index}`;
      return (
        <label htmlFor={idFor} className='weui-cell weui-check__label'>
          <div className="weui-cell__bd">{item}</div>
          <div className="weui-cell__ft">
            <input type="radio" onChange={this._onChange.bind(this, index)} checked={index === value} name={name}
                   id={idFor}/>
            <span className="weui-icon-checked"/>
          </div>
        </label>
      );
    });
  }

  _onChange = (value, event) => {
    const {onChange} = this.props;
    onChange({target: {value}});
    event.stopPropagation();
  };

  render(props) {
    const {className, items, children, ...options} = props;
    return (
      <section className={classNames('weui-cells weui-cells_radio', className)} {...options}>
        { this.children }
        { children }
      </section>
    );
  }
}
