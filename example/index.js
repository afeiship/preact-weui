import {h, render} from 'preact';

import Button from './components/button/index';
import Home from './components/home/index';
import { Link } from 'preact-router/match';
import Router from 'preact-router';

render(
  <Router>
    <Home path="/" />
    <Button path="/button" />
  </Router>,
  document.getElementById('app')
);
