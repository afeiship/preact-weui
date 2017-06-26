import {Component, h} from 'preact';

import classNames from 'classnames';

export default class extends Component{
  render(props){
    const {className,...options} = props;
    return (
      <div className={classNames('weui-cells__title',className)} {...options} />
    );
  }
}
