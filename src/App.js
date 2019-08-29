import React from 'react';
import './App.css';
// import TestContainer from './Container/TestContainer'
import FormController from './Container/FormController'
import HeaderComponent from './Components/HeaderComponent'
import { Route, Switch } from 'react-router-dom'
import HomeComponent from './Components/HomeComponent'
import FormComponent from './Components/FormComponent'
function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <Switch>
        <Route path="/" exact component={HomeComponent} />
        <Route path="/contact" component={FormController} />
      </Switch>
    </div>
  );
}

export default App;
