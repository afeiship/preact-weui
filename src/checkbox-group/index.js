import {Component, h} from 'preact';

import classNames from 'classnames';
import noop from 'noop';

export default class extends Component {
  static defaultProps = {
    items: [],
    value: [0],
    onChange: noop
  };

  get children() {
    const {name, items, value} = this.props;

    return items.map((item, index) => {
      const idFor = `id-${name}-${index}`;
      return (
        <label htmlFor={idFor} className='weui-cell weui-check__label'>
          <div class="weui-cell__hd">
            <input type="checkbox" class="weui-check"
                   onChange={this._onChange.bind(this, index)}
                   checked={~value.indexOf(index)}
                   name={name}
                   id={idFor}/>
            <i class="weui-icon-checked"/>
          </div>
          <div className="weui-cell__bd">{item}</div>
        </label>
      );
    });
  }

  _onChange = (inIndex, inEvent) => {
    let {onChange, value} = this.props;
    let pos = value.indexOf(inIndex);

    if (pos > -1) {
      value.splice(pos, 1);
    } else {
      value.push(inIndex);
    }

    onChange({target: {value}});
    inEvent.stopPropagation();
  };

  render(props) {
    const {className, items, value, children, ...options} = props;
    return (
      <section className={classNames('weui-cells weui-cells_checkbox', className)} {...options}>
        { this.children }
        { children }
      </section>
    );
  }
}
