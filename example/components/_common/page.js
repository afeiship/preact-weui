import {Component, h} from 'preact';
export default class extends Component{
  render({page,children}){
    return (
      <section className={`page ${page} js_show`}>
      {children}
      </section>
    )
  }
}
