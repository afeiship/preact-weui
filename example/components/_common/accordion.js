import {Component, h} from 'preact';
import { WeuiCells, WeuiCell, WeuiCellBody, WeuiCellFooter } from '../../../src/cells/index';
import classNames from 'classnames';


export default class extends Component{

  static defaultProps = {
    visible: false
  };

  get children(){
    const { items,onClick } = this.props;
    return items.map((item,index)=>{
      return (
        <WeuiCell access onClick={this._onClick.bind(this, item )}>
          <WeuiCellBody>{item.content}</WeuiCellBody>
          <WeuiCellFooter />
        </WeuiCell>
      );
    });
  }

  constructor(props){
    super(props);
    this.state = {
      visible: props.visible
    };
  }

  _onClick = inEvent => {
    const { onClick } = this.props;
    onClick( inEvent );
  };

  _onHdClick = inEvent => {
    this.setState({
      visible: !this.state.visible
    });
  };

  render({ title, icon  }){
    return (
      <section className={classNames('accordion',{
        'js_show': this.state.visible
      })}>
        <header className="hd weui-flex js_category" onClick={this._onHdClick}>
          <p className="weui-flex__item">{title}</p>
          <img src={`./components/_assets/images/${icon}`} alt="" />
        </header>
        <div className="bd page__category js_categoryInner">
          <WeuiCells>
            <WeuiCell access onClick={this._click}>
              <WeuiCellBody>Link1</WeuiCellBody>
              <WeuiCellFooter />
            </WeuiCell>
          </WeuiCells>
        </div>
      </section>
    )
  }
}
