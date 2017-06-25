import {Component, h} from 'preact';

import classNames from 'classnames';

export default class extends Component{

  _onFocus = (inEvent) =>{
    this.setState({focused:true})
  };

  _onBlur = (inEvent) =>{
    this.setState({focused:false})
  };

  _onInput = (inEvent) =>{
    console.log(this,inEvent.target.value);
    const {onChange} = this.props;
    onChange && onChange(inEvent);
  };

  render(props,{focused,value}){
    console.log(props);
    return (
      <div
      onClick={this._onClick}
      className={classNames('weui-search-bar',{
        'weui-search-bar_focusing':focused
      })}>
          <form className="weui-search-bar__form">
              <div className="weui-search-bar__box">
                <i className="weui-icon-search" />
                <input type="search"
                onFocus={this._onFocus}
                onBlur={this._onBlur}
                onInput={this._onInput}
                className="weui-search-bar__input" id="searchText" placeholder="搜索" />
                <a href="javascript:" className="weui-icon-clear" />
              </div>
              <label htmlFor="searchText" className="weui-search-bar__label" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                <i className="weui-icon-search"></i>
                <span>搜索</span>
              </label>
          </form>
          <a href="javascript:" className="weui-search-bar__cancel-btn">取消</a>
      </div>
    );
  }
}
