import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
// defaults to localStorage for web and AsyncStorage for react-native
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

import './styles/index.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About.js';
import StarterKit from './components/StarterKit.js';
import ClassYab from './components/ClassYab.js';
import OstadYab from './components/OstadYab.js';
import EmptyClass from './components/EmptyClass.js';
import Profile from './components/Profile';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import reducers from './reducers/';
import requireAuth from './components/hoc/require_auth';
import noRequireAuth from './components/hoc/no_require_auth';

// redux-persist conf
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(persistedReducer);
const persistor = persistStore(store);


const Base = () => (
  <main className="content" dir="rtl">
    <Header />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/ostadyab' component={OstadYab}/>
      <Route exact path='/classyab' component={ClassYab}/>
      <Route exact path='/emptyclass' component={EmptyClass}/>
      <Route path='/starterkit' component={StarterKit}/>
      <Route path='/about' component={About}/>
      <Route path='/signin' component={noRequireAuth(Signin)}/>
      <Route path='/signup' component={noRequireAuth(Signup)}/>
      <Route path="/profile" component={requireAuth(Profile)} />
    </Switch>
  </main>
)


ReactDOM.render((
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Base />
      </BrowserRouter>
    </PersistGate>
  </Provider>
), document.getElementById('root'));
