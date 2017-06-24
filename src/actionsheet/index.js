import {Component, h} from 'preact';

export default class extends Component{
  render(props){
    <section className="weui-actionsheet">{props.children}</section>
  }
}
