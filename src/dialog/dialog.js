import {Component, h} from 'preact';
import appendToDocument from 'preact-append-to-document';
import classNames from 'classnames';
import WeuiMask from '../mask/index';
import noop from 'noop';
import objectAssign from 'object-assign';

const defaultProps = {
  header: null,
  body: null,
  footer: [],
  visible: false,
  hidden: true,
  onClick: noop
};

export default class extends Component{
  static newInstance(inProps){
    return appendToDocument(this, inProps, {
      className: 'preact-dialog-docker'
    });
  };

  static defaultProps = defaultProps;
  state = defaultProps;

  show(inProps){
    const { visible } = this.state;
    const newProps = objectAssign( this.state, this.props,{ hidden: false, visible:true}, inProps  );
    !visible && this.setState(newProps);
    return this;
  }

  hide(){
    const { visible } = this.state;
    visible && this.setState({ visible: false });
    return this;
  }

  then(inCallback){
    this._callback = inCallback;
  }

  _onAnimationEnd = inEvent => {
    const { visible } = this.state;
    if(this._callback && typeof this._callback==='function'){
      !visible && this.setState({ hidden: !visible});
      this._callback();
      this._callback = null;
    }
  };

  _onItemClick = inEvent => {
    const {onClick} = inEvent;
    this.hide().then(()=>{
      onClick(inEvent);
    });
  };

  render(props,{ hidden, className, header,body,footer,visible }){
    return (
      <div className="weui-dialog-wrapper">
        <WeuiMask visible={visible} />
        <section hidden={hidden} onAnimationEnd={this._onAnimationEnd} className={classNames("weui-dialog",{
          'weui-animate-fade-in':visible,
          'weui-animate-fade-out':!visible,
        },className)}>
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
                      onClick={this._onItemClick.bind(this, item)}
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
