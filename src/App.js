import React from 'react';
import {HashRouter, Route} from 'react-router-dom'
import SearchMovie from './components/SearchMovie'
import Search from './routes/Search';
import Navigation from './components/Navigation';

function App() {
  return (
    <HashRouter>
      <Navigation/>
      <Route path='/' exact={true} component={Search}></Route>
      <Route path='/search' exact={true} component={SearchMovie}></Route>
    </HashRouter>
  );

}

export default App;
