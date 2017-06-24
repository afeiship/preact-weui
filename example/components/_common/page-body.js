import {Component, h} from 'preact';

export default class extends Component{
  render({children}){
    return (
      <section className='page__bd page__bd_spacing'>
      {children}
      </section>
    )
  }
}
