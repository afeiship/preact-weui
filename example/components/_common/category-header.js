import {Component, h} from 'preact';

export default class extends Component{
  render({title,icon}){
    return (
      <section className='weui-flex js_category'>
        <p className="weui-flex__item">{title}</p>
        <img src={`./components/_assets/images/${icon}`} alt="" />
      </section>
    )
  }
}
