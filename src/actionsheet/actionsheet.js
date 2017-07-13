import {Component, h} from 'preact';
import appendToDocument from 'preact-append-to-document';
import classNames from 'classnames';
import WeuiMask from '../mask/index';
import noop from 'noop';

export default class extends Component{
  static newInstance(inProps){
    return appendToDocument(this, inProps, {
      className: 'preact-actionsheet-docker'
    });
  };

  state = {
    items: [],
    visible: false,
    onClick: noop
  };

  get menu(){
    const {items} = this.state;
    return items.filter(item => item.role === 'menu')
  }
  get action(){
    const {items} = this.state;
    return items.filter(item => item.role === 'action')
  }

  show(inProps){
    this.setState({ visible:true, ...inProps });
    return this;
  }

  hide(){
    this.setState({ visible: false });
    return this;
  }

  then(inCallback){
    this._callback = inCallback;
  }

  getItemsChildren(inItems){
    return inItems.map((item,index)=>{
      return <div onClick={this._onItemClick.bind(this,item)} className="weui-actionsheet__cell">{item.content}</div>
    })
  }

  _onClick = inEvent => {
    this.hide();
  };

  _onItemClick = inEvent => {
    const { onClick } = this.state;
    const { action } = inEvent;
    switch(action){
      case 'cancel':
        this.hide();
        break;
    }
    onClick(inEvent);
  };

  _onTransitionEnd = inEvent => {
    const { visible } = this.state;
    if(this._callback && typeof this._callback==='function'){
      this._callback();
      this._callback = null;
    }
  };

  render(props,{ title, onClick, visible,items }){
    return (
      <div className="weui-actionsheet-wrapper">
        <WeuiMask onClick={this._onClick} visible={visible} />
        <section onTransitionEnd={this._onTransitionEnd} className={
          classNames("weui-actionsheet",
          {'weui-actionsheet_toggle':visible})
        }>
          <header className="weui-actionsheet__title">
            <p className="weui-actionsheet__title-text">{title}</p>
          </header>
          <div className="weui-actionsheet__menu">
            { this.getItemsChildren( this.menu ) }
          </div>
          <footer className="weui-actionsheet__action">
            { this.getItemsChildren( this.action ) }
          </footer>
        </section>
      </div>
    )
  }
}
