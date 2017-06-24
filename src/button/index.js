import {Component, h} from 'preact';

import classNames from 'classnames';

export default class extends Component{
  render(props){
    const {size,mini,theme,disabled,inline,loading,children,plain,className,...options} = props;
    
    return (
      <button 
      {...options}
      disabled={disabled}
      className={
        classNames(
          'weui-btn',
          plain ? `weui-btn_plain-${theme}`:`weui-btn_${theme}`,
          {
            'weui-btn_mini':mini,
            'weui-btn_disabled':disabled && !plain,
            'weui-btn_plain-disabled':disabled && plain,
            'weui-btn_inline':inline,
            'weui-btn_loading':loading
          },
          className
        )
      }>
      {loading && <i className="weui-loading"></i>}
      {children}</button>
    );
  }
}
