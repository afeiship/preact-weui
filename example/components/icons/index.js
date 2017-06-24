import {CategoryHeader, Page, PageBody, PageFooter, PageHeader} from '../_common/index';
import {Component, h} from 'preact';

import WeuiIcon from 'src/icon/index';

const IconBox = ({msg,name,title,desc}) => (
	<div className="icon-box">
    <WeuiIcon msg={msg} name={name} />
    <div className="icon-box__ctn">
      <h3 className="icon-box__title">{title}</h3>
      <p className="icon-box__desc">{desc}</p>
    </div>
  </div>
);

export default class extends Component{
  render(){
    return (
      <Page page="icons">
        <PageHeader title='Icons' desc='图标' />
        <PageBody>
          <IconBox msg name='success' title="成功" desc="用于表示操作顺利达成" />
          <IconBox msg name='info' title="提示" desc="用于表示信息提示；也常用于缺乏条件的操作拦截，提示用户所需信息" />
          <IconBox msg name='warn' title="普通警告" desc="用于表示操作后将引起一定后果的情况" />
          <IconBox msg name='waiting' title="等待" desc="用于表示等待" />

          <div className="icon_sp_area">
            <WeuiIcon name="success" /> 
            <WeuiIcon name="success-no-circle" /> 
            <WeuiIcon name="circle" /> 
            <WeuiIcon name="warn" /> 
            <WeuiIcon name="download" /> 
            <WeuiIcon name="info-circle" /> 
            <WeuiIcon name="cancel" /> 
            <WeuiIcon name="search" /> 
          </div>
        </PageBody>
        <PageFooter />
      </Page>
    )
  }
}
