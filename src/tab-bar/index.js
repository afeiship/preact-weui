import {Component, h} from 'preact';

import classNames from 'classnames';

export default class extends Component{
  render(props,{items,value}){
    return (
      <div className="weui-tab">
          <div className="weui-navbar">
              <div className="weui-navbar__item">
                <i className="weui-icon-success"></i>
                  选项一
              </div>
              <div className="weui-navbar__item">
                  选项二
              </div>
              <div className="weui-navbar__item">
                  选项三
              </div>
          </div>
          <div className="weui-tab__panel">

          </div>
      </div>
    );
  }
}
