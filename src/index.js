import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import GitHubForkRibbon from 'react-github-fork-ribbon';

// defaults to localStorage for web and AsyncStorage for react-native
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

import './styles/index.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Tools from './components/Tools.js';


const Base = () => (
  <main className="content" dir="rtl">
    <Header />
    <GitHubForkRibbon href="https://github.com/reinenichts/autofunion"
                      target="_blank"
                      position="right"
                      color="red">
      Fork me on GitHub
    </GitHubForkRibbon>
    <Switch>
      <Route exact path='/' component={Tools}/>
      {/* <Route exact path='/tools' component={Tools}/>
      <Route path='/about' component={About}/> */}
    </Switch>
  </main>
)


ReactDOM.render((
  <BrowserRouter>
    <Base />
  </BrowserRouter>
), document.getElementById('root'));
