import {h, render} from 'preact';

// pages:
import Button from './components/button/index';
import Home from './components/home/index';
import Icons from './components/icons/index';
import Input from './components/input/index';
// routes:
import { Link } from 'preact-router/match';
import Router from 'preact-router';

render(
  <Router>
    <Home path="/" />
    <Button path="/button" />
    <Input path="/input" />
    <Icons path="/icons" />
  </Router>,
  document.getElementById('app')
);
