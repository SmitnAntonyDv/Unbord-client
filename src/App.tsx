import React from 'react';
import './App.css';
import SignUp from './Components/Navigation/SignUp/SignUp';
import Homepage from './Pages/Homepage';
import { Switch, Route } from 'react-router-dom';

//development branch
function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Homepage} />

        <SignUp />
      </Switch>
    </div>
  );
}

export default App;
