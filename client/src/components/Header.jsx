import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import {connect} from 'react-redux';


const Navbar = (props) =>{

return(<nav>
<ul>
  <li>
    <NavLink to="/">
       Resturants
    </NavLink>
  </li>
  <li>
      <NavLink to="/orders">
        Orders
        <div className = "ordersum totalprice">
        {props.totalPrice}
        </div>
        <div className = "ordersum totalquantity">
        {props.totalQuantity}
        </div>
      </NavLink>
  </li>
</ul>
</nav>)
}

function mapStateToProps(state){
  console.log(state.order)
  return {
    cart:state.order
  }
}

export default connect(mapStateToProps)(Navbar)
