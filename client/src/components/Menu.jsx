import React, { Component } from 'react';
import {connect} from 'react-redux';
import MenuItem from './MenuItem.js';

const Menu = (props) => {

    let menuItems = props.menu.map((menuItem,index)=>
    <MenuItem addToCart={props.addToCart} removeFromCart={props.removeFromCart} menuItem={menuItem}  id={props.id}/>)
    return(
    <div>
    {menuItems}
    </div>
  )
}

function mapStateToProps(state){
  console.log(state)
  return {
    cart:state.order
  }
}

function mapDispatchToProps(dispatch){
  return {
    addToCart:(item,id) =>{
      dispatch({type:"ADD", payload:{item:item,id:id}})
    },
    removeFromCart:(item,id) => {
      dispatch({type:"REMOVE", payload:{item:item,id:id}})
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Menu)

