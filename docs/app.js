import {h, Component} from 'preact';

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
import createHashHistory from 'history/createHashHistory';

export default class extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<Router onChange={this.handleRoute} history={createHashHistory()}>
        <Home path="/" />
        <Button path="/preact-weui/button" />
        <Input path="/preact-weui/input" />
        <Icons path="/preact-weui/icons" />
        <List path="/preact-weui/list" />
        <Article path="/preact-weui/article" />
        <Badge path="/preact-weui/badge" />
        <Flex path="/preact-weui/flex" />
        <Footer path="/preact-weui/footer" />
        <Gallery path="/preact-weui/gallery" />
        <Grid path="/preact-weui/grid" />
        <Loadmore path="/preact-weui/loadmore" />
        <Panel path="/preact-weui/panel" />
        <FormPreview path="/preact-weui/form-preview" />
        <SearchBar path="/preact-weui/search-bar" />
        <Msg path="/preact-weui/msg" />
        <Layers path="/preact-weui/layers" />
        <MsgSuccess path="/preact-weui/msg-success" />
        <MsgWarn path="/preact-weui/msg-warn" />
        <Cells path="/preact-weui/cells" />
        <Mask path="/preact-weui/mask" />
        <ActionSheet path="/preact-weui/actionsheet" />
        <Dialog path="/preact-weui/dialog" />
      </Router>
		);
	}
}
