import {Component, h} from 'preact';

import classNames from 'classnames';

export default class extends Component{
  render(props){
    const {className,access,...options} = props;
    return (
      <div className={classNames('weui-cell',{
        'weui-cell_access': access
      },className)} {...options} />
    );
  }
}
