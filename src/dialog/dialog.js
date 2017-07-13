import {Component, h} from 'preact';
import appendToDocument from 'preact-append-to-document';
import classNames from 'classnames';
import WeuiMask from '../mask/index';
import noop from 'noop';
import './style.scss';



export default class extends Component{
  static newInstance(inProps){
    return appendToDocument(this, inProps, {
      className: 'preact-dialog-docker'
    });
  };

  state = {
    header: null,
    body: null,
    footer: [],
    visible: false,
    onClick: noop
  };

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

  _onTransitionEnd = inEvent => {
    const { visible } = this.state;
    if(this._callback && typeof this._callback==='function'){
      this._callback();
      this._callback = null;
    }
  };

  // _onClick = inEvent => {
  //   this.hide();
  // };

  render(props,{ header,body,footer,visible }){
    return (
      <div className="weui-dialog-wrapper">
        <WeuiMask onClick={this._onClick} visible={visible} />
        <section className="weui-dialog" data-visible={String(visible)}>
          {
            header && <header className="weui-dialog__hd">
              <strong className="weui-dialog__title">{header}</strong>
            </header>
          }
          {
            body && <div className="weui-dialog__bd">{body}</div>
          }
          {footer && <footer className="weui-dialog__ft">
            {
              footer.map(item=>{
                return (
                  <a href="javascript:;"
                      onClick={item.onClick}
                      className={`weui-dialog__btn weui-dialog__btn_${item.theme || 'default'}`}>{item.content}
                  </a>
                )
              })
            }
          </footer>}
        </section>
      </div>
    )
  }
}
