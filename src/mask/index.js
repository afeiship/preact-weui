import {Component, h} from 'preact';
import classNames from 'classnames';

export default class extends Component{

  constructor(props){
    super(props);
    this.initialState(props);
  }

  initialState(inProps){
    this.state =  {
      hidden: !inProps.visible
    }
  }

  componentWillReceiveProps(nextProps) {
    const {visible} = nextProps;
    if(visible){
      this.initialState(nextProps);
      this.setState(this.state);
    }
  }

  _onWebkitAnimationEnd = inEvent => {
    const {visible} = this.props;
    if(!visible){
      this.setState({ hidden:true });
    }
  };

  render({visible,className,...props},{hidden}){
    return (
      <div
        hidden={!visible && hidden}
        onAnimationEnd={this._onWebkitAnimationEnd}
        className={classNames("weui-mask",{
          'weui-animate-fade-in':visible,
          'weui-animate-fade-out':!visible,
        },className)} {...props} />
    );
  }
}
