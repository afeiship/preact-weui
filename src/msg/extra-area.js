import {Component, h} from 'preact';

import classNames from 'classnames';

export default class extends Component{
  render(props){
    const {className,children,...options} = props;
    return (
      <div {...options}
      className={ classNames( 'weui-msg__extra-area', className ) }>
      {children}
      </div>
    );
  }
}

