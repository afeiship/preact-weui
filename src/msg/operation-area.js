import {Component, h} from 'preact';

import classNames from 'classnames';

export default class extends Component{
  render(props){
    const {className,children,...options} = props;
    return (
      <div {...options}
      className={ classNames( 'weui-msg__opr-area', className ) }>
      {children}
      </div>
    );
  }
}

