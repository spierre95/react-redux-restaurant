import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ResturantList from './components/ResturantList.jsx'
import Menu from './components/Menu.jsx'
import OrderHistory from './components/OrderHistory.js'
import { Switch, Route, NavLink } from 'react-router-dom';



class App extends Component {
  render() {
    const Nav = (props) => <nav>
<ul>
  <li>
    <NavLink to="/">Resturants</NavLink>
  </li>
  <li>
    <NavLink to="/orders">Orders</NavLink>
  </li>
</ul>
</nav>
    return (
      <div>
        {Nav()}
        <Switch>
          <Route exact path="/" component={ResturantList}/>
          <Route exact path="/restaurant/:res_id" component={Menu}/>
          <Route exact path="/orders" component={OrderHistory}/>
        </Switch>
      </div>
    );
  }
}

export default App;

