import {Component, h} from 'preact';

import classNames from 'classnames';

export default class extends Component{

  _onFocus = (inEvent) =>{
    this.setState({focused:true})
  };

  _onInput = (inEvent) =>{
    const {onChange} = this.props;
    onChange && onChange(inEvent);
  };

  _onClear = (inEvent) =>{
    this.setState({value:''});
  };

  _onCancel = (inEvent) =>{
    this.setState({focused:false})
  };

  componentWillReceiveProps(nextProps) {
    const value = nextProps.value
    if(value!== this.state.value){
      this.setState({value});
    }
  }

  render(props,{focused,value}){
    return (
      <div
      className={classNames('weui-search-bar',{
        'weui-search-bar_focusing':focused
      })}>
          <form className="weui-search-bar__form">
              <div className="weui-search-bar__box">
                <i className="weui-icon-search" />
                <input type="search"
                onFocus={this._onFocus}
                onInput={this._onInput}
                value = {value}
                className="weui-search-bar__input" id="searchText" placeholder="搜索" />
                <a href="javascript:" className="weui-icon-clear" onClick={this._onClear} />
              </div>
              <label htmlFor="searchText" className="weui-search-bar__label">
                <i className="weui-icon-search"></i>
                <span>搜索</span>
              </label>
          </form>
          <a href="javascript:" className="weui-search-bar__cancel-btn" onClick={this._onCancel}>取消</a>
      </div>
    );
  }
}
