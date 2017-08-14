import {h, render} from 'preact';

// pages:
import Button from './components/button/index';
import Home from './components/home/index';
import Icons from './components/icons/index';
import Input from './components/input/index';
import SearchBar from './components/search-bar/index';
import Msg from './components/msg/index';
import MsgSuccess from './components/msg-success/index';
import MsgWarn from './components/msg-warn/index';
import Cells from './components/cells/index';
import Mask from './components/mask/index';
import ActionSheet from './components/actionsheet/index';
import Dialog from './components/dialog/index';
import List from './components/list/index';
import Article from './components/article/index';
import Badge from './components/badge/index';
import Flex from './components/flex/index';
import Footer from './components/footer/index';
import Gallery from './components/gallery/index';
import Grid from './components/grid/index';
import Loadmore from './components/loadmore/index';
import Panel from './components/panel/index';
import FormPreview from './components/form-preview/index';
import Layers from './components/layers/index';

// routes:
import Router from 'preact-router';

render(
  <Router>
    <Home path="/preact-weui/docs/" />
    <Button path="/preact-weui/docs/button" />
    <Input path="/preact-weui/docs/input" />
    <Icons path="/preact-weui/docs/icons" />
    <List path="/preact-weui/docs/list" />
    <Article path="/preact-weui/docs/article" />
    <Badge path="/preact-weui/docs/badge" />
    <Flex path="/preact-weui/docs/flex" />
    <Footer path="/preact-weui/docs/footer" />
    <Gallery path="/preact-weui/docs/gallery" />
    <Grid path="/preact-weui/docs/grid" />
    <Loadmore path="/preact-weui/docs/loadmore" />
    <Panel path="/preact-weui/docs/panel" />
    <FormPreview path="/preact-weui/docs/form-preview" />
    <SearchBar path="/preact-weui/docs/search-bar" />
    <Msg path="/preact-weui/docs/msg" />
    <Layers path="/preact-weui/docs/layers" />
    <MsgSuccess path="/preact-weui/docs/msg-success" />
    <MsgWarn path="/preact-weui/docs/msg-warn" />
    <Cells path="/preact-weui/docs/cells" />
    <Mask path="/preact-weui/docs/mask" />
    <ActionSheet path="/preact-weui/docs/actionsheet" />
    <Dialog path="/preact-weui/docs/dialog" />
  </Router>,
  document.getElementById('app')
);
