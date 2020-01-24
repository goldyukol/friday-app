import React from 'react';
import './App.css';
import Login from './Components/Login'
import { Route } from 'react-router-dom';
import Register from './Components/Register/Register';
import Forgot from './Components/Forgot';
import Profile from './Components/Profile';
import Modals from './Components/Modals';
import Time from './Components/Time';
import Color from './Components/Color';


interface IProps {

}

const App = (props: IProps) => {
  return (
    <div className="App">
      <header className='header'>
        <a href='/login'>Login</a>
        <a href='/register'>Register</a>
        <a href='/forgot'>Forgot</a>
        <a href='/profile'>Profile</a>
        <a href='/modals'>Modals</a>
        <a href='/time'>Time</a>
        <a href='/color'>Color</a>
      </header>
      <div>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/forgot' component={Forgot} />
        <Route path='/profile' component={Profile} />
        <Route path='/modals' component={Modals} />
        <Route path='/time' component={Time} />
        <Route path='/color' component={Color} />
      </div>

    </div>
  );
}

export default App;
