import {Component, h} from 'preact';

export default class extends Component{
  render({children}){
    return (
      <section className='icon-box'>
      {children}
      </section>
    )
  }
}
