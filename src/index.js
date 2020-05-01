import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Bot from './Bot';
import Multiplayer from './Multiplayer';
import {Router, Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Header from './Header';
import Main from './Main';
  
  ReactDOM.render(
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route exact path='/tic-tac-toe' component={Main}/>
        <Route path='/tic-tac-toe/bot' render={()=> <Header><Bot/></Header> } />
        <Route path='/tic-tac-toe/multiplayer' render={()=> <Header><Multiplayer/></Header> } />
      </Switch>
    </Router>,
    document.getElementById('root')
  );
  
