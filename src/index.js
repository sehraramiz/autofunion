import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import './styles/index.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About.js';
import StarterKit from './components/StarterKit.js';
import ClassYab from './components/ClassYab.js';
import OstadYab from './components/OstadYab.js';
import EmptyClass from './components/EmptyClass.js';


const Base = () => (
  <main class="content" dir="rtl">
    <Header />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/ostadyab' component={OstadYab}/>
      <Route exact path='/classyab' component={ClassYab}/>
      <Route exact path='/emptyclass' component={EmptyClass}/>
      <Route path='/starterkit' component={StarterKit}/>
      <Route path='/about' component={About}/>
    </Switch>
  </main>
)


ReactDOM.render((
  <BrowserRouter>
    <Base />
  </BrowserRouter>
), document.getElementById('root'));
