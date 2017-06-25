import {Component, h} from 'preact';

import classNames from 'classnames';

export default class extends Component{
  render(props){
    const {name,className,msg,...options} = props;

    return (
      <i {...options}
      className={
        classNames(
          `weui-icon-${name}`,
          {
            'weui-icon_msg':msg
          },
          className
        )
      }/>
    );
  }
}
