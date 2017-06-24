import {Component, h} from 'preact';

export default class extends Component{
  render({title,desc}){
    return (
        <header className="page__hd">
          <h1 className="page__title">{title}</h1>
          <p className="page__desc">{desc}</p>
        </header>
    )
  }
}
