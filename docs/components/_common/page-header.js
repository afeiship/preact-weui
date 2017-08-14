import {Component, h} from 'preact';

export default class extends Component{
  render({title,desc}){
    return (
        <header className="page__hd">
          <h1 className="page__title" dangerouslySetInnerHTML={{__html:title}} />
          <p className="page__desc">{desc}</p>
        </header>
    )
  }
}
