import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ResturantList from './components/ResturantList.jsx'
import Menu from './components/Menu.jsx'
import OrderSummary from './components/OrderSummary.js'
import { Switch, Route, NavLink } from 'react-router-dom';


class App extends Component {
  render() {

    return (
      <div>
        <Switch>
          <Route exact path="/" component={ResturantList}/>
          <Route exact path="/menu/:res_id" component={Menu}/>
          <Route exact path="/menu/:res_id/order" component={OrderSummary}/>
        </Switch>
      </div>
    );
  }
}

export default App;

