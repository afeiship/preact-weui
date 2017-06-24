import {Component, h} from 'preact';

export default class extends Comment{
  render(props){
    <button className="weui-button">{props.children}</button>
  }
}
